import { useMemo } from 'react';

import { useFieldValue } from '..';
import { get } from '../helpers/object';

import useFieldError from './useFieldError';
import useFieldTouched from './useFieldTouched';
import useFormSelect from './useFormSelect';
import useSetFieldError from './useSetFieldError';
import useSetSetFieldTouched from './useSetFieldTouched';
import useSetFieldValue from './useSetFieldValue';

/**
 * Get field value, meta-info, actions for one field
 * - use dot chain for nested path
 */
export default function useField<V = unknown>(name: string) {
  const isChanged = useFormSelect((s) => !!get(s?.changed || {}, name));
  const isDisabled = useFormSelect((s) => {
    const specific = get(s?.disabledFields || {}, name);
    return typeof specific === 'boolean' ? specific : !!s?.disabled;
  });
  const isReadOnly = useFormSelect((s) => !!s?.readOnly); // TODO: use field specific
  const error = useFieldError(name);

  const initialValue = useFormSelect((s) => get(s?.initialValues || {}, name) || null);
  const isRequired = useFormSelect((s) => !!get(s?.required, name));
  const value: V | null = useFieldValue(name);
  const isTouched = useFieldTouched(name);

  const setValue = useSetFieldValue<V>(name);
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
