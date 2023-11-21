import { get } from 'object-path';
import { ReactNode, useCallback, useMemo } from 'react';
import { useContext, useContextSelector } from 'use-context-selector';

import { SetFieldErrorVal } from './components/BaseFieldProps';
import { FormActionContext, FormStateContext, FormState, Data, FormAction } from './context';

/**
 * Get field value, meta-info, actions for one field
 * - use dot chain for nested path
 */
export function useField<V = unknown>(name: string) {
  const isChanged = useFormSelect((s) => !!s.changed?.[name]);
  const isDisabled = useFormSelect((s) =>
    s.disabledFields?.[name] ? !!s.disabledFields[name] : !!s.disabled,
  );
  const error = useFormSelect((s) =>
    s.submitted > 0 || !!s.touched?.[name] ? s.errors?.[name] : undefined,
  );
  const initialValue = useFormSelect((s) => s.initialValues?.[name]);
  const isRequired = false; // TODO: ...
  const isTouched = useFormSelect((s) => s?.submitted > 0 || !!s?.touched[name]);
  const value: V = useFormSelect((s) => get(s.values, name));

  const setValue = useSetFieldValue(name);
  const setTouched = useSetSetFieldTouched(name);
  const setError = useSetFieldError(name);

  return useMemo(
    () => ({
      error,
      initialValue,
      isChanged,
      isDisabled,
      isRequired,
      isTouched,
      name,
      onBlur: () => setTouched(),
      onChange: setValue,
      setError,
      setValue,
      value,
    }),
    [
      isChanged,
      isDisabled,
      error,
      initialValue,
      isRequired,
      name,
      setError,
      setTouched,
      setValue,
      isTouched,
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
export function useFieldError(name: string): ReactNode | undefined {
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
  return useCallback((value: V) => dispatch({ name, type: 'setValue', value }), [dispatch, name]);
}

export function useSetValues<D extends Data = Data>() {
  const dispatch = useContext(FormActionContext);
  return useCallback((values: D) => dispatch({ type: 'setValues', values }), [dispatch]);
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
    (error: SetFieldErrorVal | undefined) => dispatch({ error, name, type: 'setError' }),
    [dispatch, name],
  );
}

/**
 * "Redux like" Selector to get specific part of form state, or complete state
 */
export function useFormSelect<D extends Data = Data, R = unknown>(
  selector: (s: FormState<D>) => R,
) {
  return useContextSelector(FormStateContext, selector);
}

export function useFormState<D extends Data>(): FormState<D> {
  return useContext(FormStateContext) as FormState<D>;
}

/**
 * Form dispatch action
 * enter formReducer action
 */
export function useFormDispatch<D extends Data = Data, A = FormAction<D>>(): (action: A) => void {
  const d = useContext(FormActionContext) as (action: A) => void;

  return d || (() => {});
}

/**
 * Submit helper to trigger form Submit action
 * - TODO: think about passing callback - onSubmit
 */
export function useFormSubmit() {
  const dispatch = useFormDispatch();

  return useCallback(() => {
    dispatch({ type: 'startSubmit' });
  }, [dispatch]);
}

/**
 * Helper for custom Submit button
 */
export function useSubmitButton(): [boolean, unknown] {
  const isSubmitting = useContextSelector(FormStateContext, (s) => !!s.isSubmitting);
  const submit = useFormSubmit();

  return useMemo((): [boolean, () => void] => [isSubmitting, submit], [submit, isSubmitting]);
}
