import {
  useMemo,
  useEffect,
  ReactNode,
  useReducer,
  useCallback,
  ReactElement,
} from "react";
import * as Yup from "yup";

import {
  FormState,
  FormAction,
  initialState,
  FormStateContext,
  FormActionContext,
} from "./FormContext";
import type { Data } from "./FormContext";
import { formReducer } from "./formReducer";
import { HiddenSubmit } from "./HiddenSubmit.styled";

export interface FormProps<D extends Data = Data> {
  children?: ReactNode;

  /** Default disabled status - could be overridden by specific field */
  disabled?: boolean;

  /** Define specific fields with disabled state */
  disabledFields?: Record<string, boolean>;

  /** HTML ID to trigger form by <button form="..." */
  id?: string;

  /** Keep memoized */
  initialValues?: D;

  /** Default reducer will display Toast for all validation errors onSubmit */
  logErrors?: boolean;

  onSubmit?: (data: D) => void;

  /** Form state reducer = check default formReducer for docs */
  reducer?: (s: FormState<D>, a: FormAction<D>) => FormState<D>;

  /** Validation schema = one time initialization = use custom reducer to change schema */
  schema?: Yup.SchemaOf<D>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Form<D extends Data = Data>({
  disabledFields,
  initialValues,
  logErrors,
  disabled,
  children,
  onSubmit,
  schema,
  id,
  ...props
}: FormProps<D>): ReactElement {
  type R = (state: FormState<D>, action: FormAction<D>) => FormState<D>;
  const reducer: R = props.reducer || formReducer;
  const [state, dispatch] = useReducer<R>(reducer, {
    ...initialState,
    values: initialValues as D,
    disabledFields,
    initialValues,
    disabled,
    schema,
  });

  useEffect(() => {
    dispatch({ value: initialValues, type: "initialValues" });
  }, [initialValues]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch({ cb: (d) => onSubmit && onSubmit(d), type: "onSubmit" });
    },
    [onSubmit]
  );

  const c = useMemo(() => children, [children]);

  return (
    // @ts-ignore
    <FormActionContext.Provider value={dispatch}>
      <FormStateContext.Provider value={state}>
        <form id={id} onSubmit={handleSubmit}>
          {c}
          <HiddenSubmit />
        </form>
      </FormStateContext.Provider>
    </FormActionContext.Provider>
  );
}
