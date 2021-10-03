import * as Yup from "yup";
import * as op from "object-path";

import { Data, FormAction, FormState } from "./FormContext";

export function formReducer<D extends Data = Data>(
  state: FormState<D>,
  action: FormAction<D>
): FormState<D> {
  switch (action.type) {
    // reinitialize form when initial values are changed
    case "initialValues":
      return {
        ...state,
        initialValues: action.value,
        // TODO: reset errors & touched
        values: state.schema
          ? (state.schema.cast(action.value || {}, {
              stripUnknown: true,
            }) as D)
          : ((action.value || {}) as D),
      };

    // handle change with validation
    case "onChange":
      const values = { ...state.values };

      if (op.get(values, action.name) === action.value) {
        return state;
      }

      op.set(values, action.name, action.value);

      return {
        ...state,
        changed: { ...state.changed, [action.name]: true },
        ...validate<D>(state.schema, values),
      };

    // handle blur - mark field as touched
    case "setTouched":
      if (Array.isArray(action.name)) {
        const s = { ...state };
        action.name.forEach((k) => (s.touched[k] = true));

        return s;
      }

      return {
        ...state,
        touched: { ...state.touched, [action.name]: true },
      };

    // handle submit - propagate onSubmit if its valid
    case "onSubmit":
      const s = {
        ...state,
        submitted: state.submitted + 1,
        ...validate<D>(state.schema, state.values),
      };

      if (s.isValid) {
        // fork out
        setTimeout(() => action.cb(s.values), 1);
      }

      return s;

    default:
      return state;
  }
}

function validate<D>(
  schema: undefined | Yup.SchemaOf<D>,
  data: D
): { errors: Record<string, string>; isValid: boolean; values: D } {
  const errors: Record<string, string> = {};
  let values: D = data;

  if (!schema) {
    return { errors: {}, isValid: true, values: data };
  }

  try {
    values = schema.validateSync(data, {
      abortEarly: false,
      stripUnknown: true,
    }) as D;
  } catch (err: any) {
    if (err.inner) {
      err.inner.forEach((errObj: Yup.ValidationError) => {
        if (errObj.path) {
          errors[errObj.path] = errObj.message;
        }
      });
    }
  }

  return {
    errors,
    isValid: !errors || Object.keys(errors).length === 0,
    values,
  };
}
