import { Reducer } from 'react';

import type { Data, FormErrors, ValidationFn, FormState, FormAction } from './context';
import { get, set } from './helpers';

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
): Reducer<FormState<D>, FormAction<D>> {
  return function formReducer(
    state: FormState<D>,
    action: FormAction<D>, // TODO: improve action type - enable any other { type: ... } object
  ): FormState<D> {
    switch (action.type) {
      // set new initial values - reset form state
      // @ts-ignore skip fallthrough
      case 'initialValues': // copy new from action
        state.initialValues = { ...(action.value || ({} as D)) };

      // reset form to initial state
      // @ts-ignore skip fallthrough
      case 'reset':
        state.values = { ...(state.initialValues || ({} as D)) };

      // @ts-ignore skip fallthrough
      case 'init': {
        const newState =
          action.type === 'init' && action.state ? { ...state, ...action.state } : state;
        const initErrors = validate?.(newState.values || {});
        const required = getRequired?.(newState.values) || {};

        return {
          ...newState,
          errors: initErrors,
          isSubmitting: newState.isSubmitting || false,
          required: (action.type === 'init' && action.state?.required) || required,
          submitted: newState.submitted || 0,
          touched: newState.touched || {},
        } satisfies FormState<D>;
      }

      // On field value change
      case 'setValue': {
        const values = { ...state.values };

        if (get(values, action.name) === action.value) {
          return state;
        }

        set(values, action.name, action.value);

        // TODO: validate single field
        // TODO: add support for async validation
        // TODO: think about debounced validation
        const setValueErrors = validate?.(values);
        let touched = state.touched || {};
        if (!get(touched, action.name)) {
          touched = { ...touched };
          set(touched, action.name, true);
        }

        return {
          ...state,
          errors: (setValueErrors || {}) as FormErrors,
          required: getRequired?.(values) || {},
          touched,
          values,
        };
      }

      // TODO: think about readOnly
      //
      case 'setDisabled': {
        if (!action.name) {
          return state.isDisabled === action.value ? state : { ...state, isDisabled: action.value };
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

        const touched = names.reduce((acc, name) => {
          acc[name] = true;
          return acc;
        }, state.touched || {});

        const touchedErrors = validate?.(state.values);

        return { ...state, errors: touchedErrors, touched };

        // Start submit async call
      }
      case 'startSubmit': {
        if (state.isSubmitting) {
          return state;
        }

        const submitErrors = validate?.(state.values);

        const canSubmit = !submitErrors;

        return {
          ...state,
          errors: (submitErrors || {}) as FormErrors,
          isDisabled: canSubmit,
          isSubmitting: canSubmit,
          submitted: (state.submitted || 0) + 1,
        };
      }

      // Submit action finished
      case 'endSubmit':
        if (!state.isSubmitting) {
          return state;
        }

        return {
          ...state,
          isDisabled: false,
          isSubmitting: false,
        };

      default:
        return state;
    }
  };
}
