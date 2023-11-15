import { Dispatch, useCallback, useEffect, useReducer } from 'react';

import { initialFormState } from '../constants';
import {
  Data,
  FormAction,
  FormActionContext,
  FormErrors,
  FormState,
  FormStateContext,
  ValidationFn,
} from '../context';
import { formReducerType, getFormReducer } from '../formReducer';
import { validateYupSchema } from '../yup';

import { Props } from './Form.props';

const Form = <D extends Data = Data>({
  children,
  className,
  disabled,
  disabledFields,
  id,
  initialValues,
  onSubmit,
  reducer,
  validation,
}: Props<D>) => {
  const validate: ValidationFn<D> = useCallback(
    (data) => {
      return typeof validation === 'function'
        ? (validation(data) as FormErrors | Promise<FormErrors> | undefined)
        : validateYupSchema(validation, data);
    },
    [validation],
  );
  const formReducer: formReducerType<D> = reducer || getFormReducer(validate);

  const [state, dispatch] = useReducer<formReducerType<D>, FormState<D>>(
    reducer as formReducerType<D>,
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

  // Watch actions and if detects "submit" and its valid, we can trigger "onSubmit" action
  // if it returns Promise, update state by triggering 'startSubmitting' action
  // waiting until 'endSubmitting' is triggered
  useEffect(() => {
    if (state.lastAction === 'startSubmit') {
      if (state.isValid) {
        let p = onSubmit && onSubmit(state.values, dispatch, state);

        if (!p || typeof p.then !== 'function') {
          p = Promise.resolve();
        }
        p.catch(() => undefined);
        p.then((result) => dispatch({ result, type: 'endSubmit' }));
      } else {
        dispatch({ type: 'endSubmit' });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]); // track just state changes

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
