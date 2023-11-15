import { get } from 'object-path';
import { useCallback, useMemo } from 'react';
import { useContext, useContextSelector } from 'use-context-selector';

import { FormActionContext, FormStateContext, FormState, Data, FormAction } from './context';

/**
 * Form State context selector
 */
export function useSelect<D extends Data, V = unknown>(g: (s: FormState<D>) => V) {
  return useContextSelector<FormState<D>, V>(FormStateContext, g);
}

/**
 * Get field value, meta-info, actions for one field
 * - use dot chain for nested path
 */
export function useField<V = unknown>(name: string) {
  const changed = useSelect((s) => !!s.changed?.[name]);
  const disabled = useSelect((s) =>
    s.disabledFields?.[name] ? !!s.disabledFields[name] : !!s.disabled,
  );
  const error = useSelect((s) =>
    s.submitted > 0 || !!s.touched?.[name] ? s.errors?.[name] : undefined,
  );
  const initialValue = useSelect((s) => s.initialValues?.[name]);
  const isRequired = false; // TODO: ...
  const touched = useSelect((s) => s?.submitted > 0 || !!s?.touched[name]);
  const value: V = useSelect((s) => get(s.values, name));

  const setValue = useSetFieldValue(name);
  const setTouched = useSetSetFieldTouched(name);
  const setError = useSetFieldError(name);

  return useMemo(
    () => ({
      changed,
      disabled,
      error,
      initialValue,
      isRequired,
      name,
      onBlur: () => setTouched(),
      onChange: setValue,
      setError,
      setValue,
      touched,
      value,
    }),
    [
      changed,
      disabled,
      error,
      initialValue,
      isRequired,
      name,
      setError,
      setTouched,
      setValue,
      touched,
      value,
    ],
  );
}

/**
 * Get specific field value
 * - use dot chain for nested path
 */
export function useFieldValue<V = unknown>(name: string): V {
  return useContextSelector(FormStateContext, (v) => get(v.values, name));
}

/**
 * Get specific field 'error' meta info
 * - use dot chain for nested path
 */
export function useFieldError(name: string): string | undefined {
  return useContextSelector(FormStateContext, (v) => v.errors[name]);
}

/**
 * Get specific field 'touched' meta info
 * - use dot chain for nested path
 */
export function useFieldTouched(name: string): boolean {
  return useContextSelector(FormStateContext, (v) => !!v.touched[name]);
}

/**
 * Set Field value
 * - use dot chain for nested path
 *
 * If you need to set more field values or additional info, use 'useFormDispatch'
 */
export function useSetFieldValue<V = unknown>(name: string) {
  const dispatch = useContext(FormActionContext);
  return useCallback((value: V) => dispatch({ name, type: 'onChange', value }), [dispatch, name]);
}

/**
 * Mark field as touched
 * - value defaults to true
 * - use dot chain for nested path
 *
 * If you need to set more field values or additional info, use 'useFormDispatch'
 */
export function useSetSetFieldTouched(name: string) {
  const dispatch = useContext(FormActionContext);
  return useCallback(
    (touched: boolean = true) => dispatch({ name, touched, type: 'setTouched' }),
    [dispatch, name],
  );
}

/**
 * Set field error manually
 * - use dot chain for nested path
 *
 * If you need to set more field values or additional info, use 'useFormDispatch'
 */
export function useSetFieldError(name: string) {
  const dispatch = useContext(FormActionContext);
  return useCallback(
    (error: string | undefined) => dispatch({ error, name, type: 'setError' }),
    [dispatch, name],
  );
}

/**
 * Form dispatch action
 * enter formReducer action
 */
export function useFormDispatch<D extends Data = Data, A = FormAction<D>>() {
  return useContext(FormActionContext) as (a: A) => void;
}

/**
 * Submit helper to trigger form Submit action
 */
export function useSubmit() {
  const dispatch = useFormDispatch();

  return useCallback(() => {
    dispatch({ type: 'startSubmit' });
  }, [dispatch]);
}

export function useFormState<D extends Data>(): FormState<D> {
  return useContext(FormStateContext) as FormState<D>;
}

export function useFormSubmitting() {
  const isSubmitting = useContextSelector(FormStateContext, (s) => !!s.isSubmitting);
  const result = useContextSelector(FormStateContext, (s) => !!s.submitResult);
  return useMemo(() => [isSubmitting, result], [isSubmitting, result]);
}
