import { useCallback, useMemo } from 'react';

import type { FieldActions, FieldMeta } from '../components/BaseFieldProps';
import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';

import useFieldError from './useFieldError';
import useFieldInitialValue from './useFieldInitialValue';
import useFieldIsChanged from './useFieldIsChanged';
import useIsFieldDisabled from './useFieldIsDisabled';
import useFieldIsReadonly from './useFieldIsReadonly';
import useFieldIsRequired from './useFieldIsRequired';
import useFieldIsValidating from './useFieldIsValidating';
import useFieldTouched from './useFieldTouched';
import useFieldValue from './useFieldValue';
import useSetFieldDisabled from './useSetFieldDisabled';
import useSetFieldError from './useSetFieldError';
import useSetSetFieldTouched from './useSetFieldTouched';
import useSetFieldValue from './useSetFieldValue';

/**
 * Get field value, meta-info, actions for one field
 * - use dot chain for nested path
 */
export default function useField<V = unknown, D extends Data = Data>(
  name: NestedKeyOf<D>,
): FieldMeta & FieldActions<V> & { value: V | null } {
  const initialValue = useFieldInitialValue(name);
  const isTouched = useFieldTouched(name);
  const isChanged = useFieldIsChanged(name);
  const error = useFieldError(name);
  const isDisabled = useIsFieldDisabled(name);
  const isReadOnly = useFieldIsReadonly(name);
  const isValidating = useFieldIsValidating(name);
  const isRequired = useFieldIsRequired(name);

  const value: V | null = useFieldValue(name);

  const setTouched = useSetSetFieldTouched(name);
  const setValue = useSetFieldValue<V>(name);
  const setError = useSetFieldError(name);
  const setDisabled = useSetFieldDisabled(name);
  const clearValue = useCallback(() => {
    setValue(null);
  }, [setValue]);
  const resetValue = useCallback(() => setValue(initialValue), [initialValue, setValue]);

  return useMemo(
    () => ({
      clearValue,
      error,
      initialValue,
      isChanged,
      isDisabled,
      isReadOnly,
      isRequired,
      isTouched,
      isValidating,
      name,
      resetValue,
      setDisabled,
      setError,
      setTouched,
      setValue,
      value,
    }),
    [
      clearValue,
      error,
      initialValue,
      isChanged,
      isDisabled,
      isReadOnly,
      isRequired,
      isTouched,
      isValidating,
      name,
      resetValue,
      setError,
      setTouched,
      setValue,
      setDisabled,
      value,
    ],
  );
}
