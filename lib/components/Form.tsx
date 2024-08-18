import { Dispatch, Reducer, SyntheticEvent, useCallback, useEffect, useMemo, useRef } from 'react';

import {
  Data,
  FormAction,
  ValidationFn,
  getInitialFormState,
  FormStateContext,
  FormActionContext,
  FormState,
} from '../context';
import { getDefaultFormReducer } from '../formReducer';
import useEnhancedReducer from '../hooks/useEnhancedReducer';

import type FormProps from './FormProps';

const Form = <D extends Data = Data>({
  children,
  disabled,
  getRequired,
  id,
  initialValues,
  onStateUpdate,
  onSubmit,
  reducer,
  validation,
}: FormProps<D>) => {
  const onStateUpdateRef = useRef(onStateUpdate);
  onStateUpdateRef.current = onStateUpdate;
  const onSubmitRef = useRef(onSubmit);
  onSubmitRef.current = onSubmit;

  // Causes reset of form state
  const validate: ValidationFn<D> = useCallback(
    (data) => validation?.(data) || undefined,
    [validation],
  );

  const formReducer: Reducer<FormState<D>, FormAction<D>> = useMemo(
    () => reducer || getDefaultFormReducer<D>(validate, getRequired),
    [getRequired, reducer, validate],
  );

  const mw = useMemo(
    () =>
      (_: FormState<D>) =>
      (getState: () => FormState<D>, dispatch: Dispatch<FormAction<D>>) =>
      (next: Dispatch<FormAction<D>>) =>
      (action: FormAction<D>) => {
        const prevState = getState();
        next(action);
        const nextState = getState();

        if (action.type === 'startSubmit' && nextState.isSubmitting) {
          const r = onSubmitRef.current?.(nextState.values);

          if (typeof r?.then === 'function') {
            r.catch(() => undefined).then((result) => {
              dispatch({ result, type: 'endSubmit' });
            });
          }
        }

        onStateUpdateRef.current?.(action, prevState, nextState, dispatch);
      },
    [],
  );

  const initialState = useMemo(() => {
    return formReducer(getInitialFormState({}), {
      state: { disabled: !!disabled, initialValues, values: initialValues },
      type: 'init',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [state, dispatch, getState] = useEnhancedReducer<FormState<D>, FormAction<D>>(
    formReducer,
    initialState,
    [mw],
  );

  // Track Disabled prop
  useEffect(() => {
    if (getState().disabled !== !!disabled) {
      dispatch({ type: 'setDisabled', value: !!disabled });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

  // Track Initial values change
  useEffect(() => {
    if (getState().initialValues !== initialValues) {
      dispatch({ type: 'initialValues', value: initialValues });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch({ type: 'startSubmit' });
  };

  return (
    <FormActionContext.Provider value={dispatch as Dispatch<FormAction<Data>>}>
      <FormStateContext.Provider value={state}>
        <form id={id} onSubmit={handleSubmit}>
          {typeof children === 'function' ? children(state, dispatch) : children}
          <button style={{ left: -9999, position: 'fixed', top: -9999 }} type="submit" />
        </form>
      </FormStateContext.Provider>
    </FormActionContext.Provider>
  );
};

export default Form;
