import * as op from 'object-path';

import { Data, FormErrors, ValidationFn, FormState, FormAction } from './context';
import { get, set } from './helpers/object';

export type FormReducerAction<D extends Data> = FormAction<D>;
export type formReducerType<D extends Data> = (
  s: FormState<D>,
  a: FormReducerAction<D>,
  c?: formReducerType<D>[] | formReducerType<D>,
) => FormState<D>;

/**
 * Default reducer
 * - provide validation fn
 */
export function getDefaultFormReducer<D extends Data = Data>(
  validate?: ValidationFn<D>,
  getRequired?: (data: D) => Record<string, boolean>,
): formReducerType<D> {
  return function formReducer(
    state: FormState<D>,
    action: FormAction<D>, // TODO: improve action type - enable any other { type: ... } object
  ): FormState<D> {
    switch (action.type) {
      // @ts-ignore skip fallthrough
      case 'initialValues': // copy new from action
        state.initialValues = { ...(action.value || ({} as D)) };

      // reset form to initial state
      // @ts-ignore skip fallthrough
      case 'reset': // reset values
        state.values = { ...(state.initialValues || ({} as D)) };

      // Initializing component
      // @ts-ignore skip fallthrough
      case 'init': {
        // reset metadata
        const initErrors = validate?.(state.values || {});
        return {
          ...state,
          errors: {},
          initialValues:
            ('initialValues' in action && action.initialValues) || state.initialValues || ({} as D),
          isSubmitting: false,
          isValid: !initErrors,
          isValidating: false,
          required: getRequired?.(state.values) || {},
          submitted: 0,
          touched: {},
        } satisfies FormState<D>;
      }
      // On field value change
      case 'setValue': {
        // TODO: use immer/immutable ???
        const values = { ...state.values };

        if (op.get(values, action.name) === action.value) {
          return state;
        }

        set(values, action.name, action.value);

        // TODO: validate single field
        // TODO: add support for async validation
        // TODO: think about debounce validation
        const setValueErrors = validate?.(values);
        let touched = state.touched || {};
        if (!get(touched, action.name)) {
          touched = { ...touched };
          set(touched, action.name, true);
        }

        return {
          ...state,
          errors: (setValueErrors || {}) as FormErrors,
          isValid: !setValueErrors,
          required: getRequired?.(values) || {},
          touched,
          values,
        };
      }

      case 'setReadOnly': {
        if (!action.name) {
          return state.readOnly === action.value ? state : { ...state, readOnly: !!action.value };
        }
        const readonlyFields = state.disabledFields || {};
        set(readonlyFields, action.name, action.value);
        return { ...state, readonlyFields };
      }

      // TODO: think about readOnly
      //
      case 'setDisabled': {
        if (!action.name) {
          return state.disabled === action.value ? state : { ...state, disabled: !!action.value };
        }
        const disabledFields = state.disabledFields || {};
        set(disabledFields, action.name, action.value);
        return { ...state, disabledFields };
      }
      // Set field as touched = record user interaction (mostly onBlur action)
      case 'setTouched': {
        const names = (
          action.name ? (Array.isArray(action.name) ? action.name : [action.name]) : []
        ).filter((name) => state.touched[name] !== action.touched); // TODO: use nested paths

        if (!names.length) {
          // skip render if no changes needed
          return state;
        }

        return {
          ...state,
          touched: names.reduce((acc, name) => ({ ...acc, [name]: true }), state.touched || {}),
        };

        // Start submit async call
      }
      case 'startSubmit': {
        if (state.isSubmitting) {
          return state;
        }

        const submitErrors = validate?.(state.values);

        const canSubmit = !submitErrors; // TODO: include isValidating

        return {
          ...state,
          disabled: canSubmit,
          errors: (submitErrors || {}) as FormErrors,
          isSubmitting: canSubmit,
          isValid: canSubmit,
          submitted: state.submitted || 0 + 1,
        };
      }

      // Submit action finished
      case 'endSubmit':
        if (!state.isSubmitting) {
          return state;
        }

        return {
          ...state,
          disabled: false,
          isSubmitting: false,
        };

      default:
        return state;
    }
  };
}
