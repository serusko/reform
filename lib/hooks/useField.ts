import { useMemo } from 'react';

import { get } from '../helpers/object';

import useFormSelect from './useFormSelect';
import useSetFieldError from './useSetFieldError';
import useSetSetFieldTouched from './useSetFieldTouched';
import useSetFieldValue from './useSetFieldValue';

/**
 * Get field value, meta-info, actions for one field
 * - use dot chain for nested path
 */
export default function useField<V = unknown>(name: string) {
  const isChanged = useFormSelect((s) => !!s.changed?.[name]);
  const isDisabled = useFormSelect((s) =>
    s.disabledFields?.[name] ? !!s.disabledFields[name] : !!s.disabled,
  );
  const isReadOnly = useFormSelect((s) => s.readOnly);
  const error = useFormSelect((s) =>
    s.submitted > 0 || !!s.touched?.[name] ? s.errors?.[name] : undefined,
  );
  const initialValue = useFormSelect((s) => s.initialValues?.[name]);
  const isRequired = false; // TODO: ...
  const isTouched = useFormSelect((s) => s?.submitted > 0 || !!s?.touched[name]);
  const value: V | null = useFormSelect((s) => get(s.values, name));

  const setValue = useSetFieldValue(name);
  const setTouched = useSetSetFieldTouched(name);
  const setError = useSetFieldError(name);

  return useMemo(
    () => ({
      error,
      initialValue,
      isChanged,
      isDisabled,
      isReadOnly,
      isRequired,
      isTouched,
      name,
      onChange: setValue,
      setError,
      setTouched,
      setValue,
      value,
    }),
    [
      isChanged,
      isDisabled,
      error,
      isReadOnly,
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
