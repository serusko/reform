import { Dispatch, useCallback, useEffect, useReducer, useRef } from 'react';

import {
  Data,
  FormState,
  FormAction,
  ValidationFn,
  FormStateContext,
  initialFormState,
  FormActionContext,
} from '../context';
import { FormReducerAction, formReducerType, getFormReducer } from '../formReducer';

import type FormProps from './FormProps';

const Form = <D extends Data = Data>({
  children,
  className,
  disabled,
  disabledFields,
  id,
  initialValues,
  onStateUpdate,
  onSubmit,
  reducer,
  validation,
}: FormProps<D>) => {
  const validate: ValidationFn<D> = useCallback((data) => validation?.(data), [validation]);
  const formReducer: formReducerType<D> = reducer || getFormReducer(validate);
  const dispatchRef = useRef<Dispatch<FormReducerAction<D>>>();

  const on = useRef((action: FormAction<D>, prev: FormState<D>, next: FormState<D>) => {
    const dispatch = dispatchRef.current;

    // check if we have already initialized form context providers and reducer properly
    if (!dispatch) {
      console.error('Cannot access to Dispatch trigger inside "on" action'); // TODO: improve error handling
      return;
    }

    // trigger onSubmit
    if (onSubmit && action.type === 'startSubmit' && next.isSubmitting && !prev.isSubmitting) {
      const res = onSubmit?.(next.values);

      if (res && typeof res.then === 'function') {
        res.finally(() => dispatch({ type: 'endSubmit' }));
      }
    }

    // TODO: console log errors when user "rage-click" submit action multiple times (errors are not displayed properly)

    // trigger custom watchers
    if (onStateUpdate) {
      onStateUpdate(action, prev, next, dispatch);
    }
  }).current;

  const eventFormReducer: formReducerType<D> = useCallback(
    (prevState: FormState<D>, action: FormAction<D>) => {
      const nextState = formReducer(prevState, action);
      on(action, prevState, nextState);
      return nextState;
    },
    [formReducer, on],
  );

  const [state, dispatch] = useReducer<formReducerType<D>, FormState<D>>(
    eventFormReducer,
    initialFormState as FormState<D>,
    (i: FormState<D>) =>
      formReducer(
        {
          ...i,
          disabled,
          disabledFields,
          initialValues: initialValues,
          values: initialValues || ({} as D),
        },
        { type: 'init' },
      ),
  );

  dispatchRef.current = dispatch;

  // watch initial values, if changed, trigger reducer action
  // so we can decide inside reducer what do we want to do
  useEffect(() => {
    if (initialValues !== state.initialValues) {
      dispatch({ type: 'initialValues', value: initialValues });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  useEffect(() => {
    dispatch({ type: 'setDisabled', value: !!disabled });
  }, [disabled]);

  return (
    <FormActionContext.Provider value={dispatch as Dispatch<FormAction<Data>>}>
      <FormStateContext.Provider value={state}>
        <form
          className={className}
          id={id}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: 'startSubmit' });
          }}
        >
          {children}
          <button style={{ left: -9999, position: 'fixed', top: -9999 }} type="submit" />
        </form>
      </FormStateContext.Provider>
    </FormActionContext.Provider>
  );
};

export default Form;
