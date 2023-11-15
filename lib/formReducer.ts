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
    prevState: FormState<D>,
    action: FormAction<D>, // TODO: improve action type - enable any other { type: ... } object
    /**
     * YOu can prepare state with custom reducer(s) before it will be processed with default action
     */
    customReducers?: formReducerType<D>[] | formReducerType<D>,
  ): FormState<D> {
    const reducers = customReducers
      ? Array.isArray(customReducers)
        ? customReducers
        : [customReducers]
      : [];

    // TODO: think about running reducers after this "common" so state will be muted after changes not before
    const state = reducers.reduce((s, reducer) => reducer(s, action), {
      ...prevState,
      lastAction: action.type, // initialize new state as
    } as FormState<D>);

    switch (action.type) {
      // Initial values (reference) changed
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
          submitted: 0,
          touched: {},
        } satisfies FormState<D>;

      // On field value change
      case 'onChange': {
        const values = { ...state.values };

        if (op.get(values, action.name) === action.value) {
          return state;
        }

        setIn(values, action.name, action.value);

        const errors0 = validate(values);

        const x = {
          ...state,
          changed: { ...state.changed, [action.name]: true },
          errors: (errors0 || {}) as FormErrors,
          isValid: !errors0,
          touched: { ...state.touched, [action.name]: true },
          values,
        };

        return x;

        // Set field touched (mostly onBlur action)
      }
      case 'setTouched':
        if (Array.isArray(action.name)) {
          const s = { ...state };
          action.name.forEach((k) => (s.touched[k] = true));
          return s;
        }

        return {
          ...state,
          touched: { ...state.touched, [action.name]: true },
        };

      // Async Submit action finished
      case 'endSubmit':
        return {
          ...state,
          disabled: false,
          isSubmitting: false,
          submitResult: action.result,
        };

      // Start submit async call
      case 'startSubmit': {
        if (state.isSubmitting) {
          return state;
        }

        const errors1 = validate(state.values);

        if (prevState.lastAction === 'endSubmit') {
          // eslint-disable-next-line no-console
          console.log(state.errors);
        }

        return {
          ...state,
          disabled: true,
          errors: (errors1 || {}) as FormErrors,
          isSubmitting: true,
          isValid: !errors1,
          submitted: state.submitted + 1,
        };
      }
      case 'setDisabled':
        if (prevState.disabled === action.value) {
          return state;
        } else {
          return { ...state, disabled: !!action.value };
        }

      default:
        return state;
    }
  };
}
