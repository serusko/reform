import { Dispatch, SyntheticEvent, useCallback, useEffect, useMemo, useRef } from 'react';

import { Data, FormAction, ValidationFn, FormStateContext, FormActionContext } from '../context';
import { formReducerType, getDefaultFormReducer } from '../formReducer';
import useFormReducer from '../useFormReducer';

import type FormProps from './FormProps';

const Form = <D extends Data = Data>({
  children,
  disabled,
  id,
  initialValues,
  onStateUpdate,
  onSubmit,
  readOnly,
  reducer,
  validation,
}: FormProps<D>) => {
  // Causes reset of form state
  const validate: ValidationFn<D> = useCallback(
    (data) => validation?.(data) || undefined,
    [validation],
  );
  const formReducer: formReducerType<D> = useMemo(
    () => reducer || getDefaultFormReducer(validate),
    [reducer, validate],
  );

  // Do not cause reset form state on ref change - TODO refactor / useCallback with inside ref?
  const onStateUpdateRef = useRef(onStateUpdate);
  onStateUpdateRef.current = onStateUpdate;
  const onSubmitRef = useRef(onSubmit);
  onSubmitRef.current = onSubmit;

  const [state, dispatch] = useFormReducer<D>(
    formReducer,
    initialValues,
    !!disabled,
    !!readOnly,
    onSubmitRef,
    onStateUpdateRef,
  );

  // watch initial values, if changed, trigger reducer action
  // so we can decide inside reducer what do we want to do
  useEffect(() => {
    if (initialValues !== state.initialValues) {
      dispatch({ type: 'initialValues', value: initialValues });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  useEffect(() => {
    if (state.disabled !== !!disabled) {
      dispatch({ type: 'setDisabled', value: !!disabled });
    }
  }, [disabled, state.disabled, dispatch]);

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      dispatch({ type: 'startSubmit' });
    },
    [dispatch],
  );

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
