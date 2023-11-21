import { stat } from 'fs';

import * as op from 'object-path';

import { Data, FormAction, FormErrors, FormState, ValidationFn } from './context';

export function setIn(obj: Data, path: string, value: unknown) {
  try {
    op.set(obj, path, value);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('setIn', path);
    throw e;
  }
}

export function getIn(obj: Data, path: string) {
  return op.get(obj, path);
}

export type FormReducerAction<D extends Data> = FormAction<D>;
export type formReducerType<D extends Data> = (
  s: FormState<D>,
  a: FormReducerAction<D>,
  c?: formReducerType<D>[] | formReducerType<D>,
) => FormState<D>;

/**
 * Default reducer
 */
export function getFormReducer<D extends Data = Data>(
  validate: ValidationFn<D>,
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
      case 'init': // reset metadata
        return {
          ...state,
          changed: {},
          errors: {},
          isSubmitting: false,
          isValidating: false,
          submitted: 0,
          touched: {},
        } satisfies FormState<D>;

      // On field value change
      case 'setValue': {
        // TODO: use immer/immutable ???
        const values = { ...state.values };

        if (op.get(values, action.name) === action.value) {
          return state;
        }

        setIn(values, action.name, action.value);

        // TODO: validate single field
        // TODO: add support for async validation
        // TODO: think about debounce validation
        const errors0 = validate(values);

        return {
          ...state,
          changed: { ...state.changed, [action.name]: true },
          errors: (errors0 || {}) as FormErrors,
          isValid: !errors0,
          touched: { ...state.touched, [action.name]: true },
          values,
        };
      }

      // TODO: think about readOnly
      case 'setDisabled':
        if (state.disabled === action.value) {
          return state;
        } else {
          return { ...state, disabled: !!action.value };
        }

      // Set field as touched = record user interaction (mostly onBlur action)
      case 'setTouched': {
        const names = action.name ? (Array.isArray(action.name) ? action.name : [action.name]) : [];

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

        const submitErrors = validate(state.values);

        const canSubmit = !submitErrors; // TODO: include isValidating

        return {
          ...state,
          disabled: canSubmit,
          errors: (submitErrors || {}) as FormErrors,
          isSubmitting: canSubmit,
          isValid: canSubmit,
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
