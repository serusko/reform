import { useCallback } from 'react';

import { SetFieldErrorVal } from '../components/BaseFieldProps';

import useFormDispatch from './useFormDispatch';

/**
 * Set field error manually
 * - use dot chain for nested path
 *
 * If you need to set more field values or additional info, use 'useFormDispatch'
 */
export default function useSetFieldError(name: string) {
  const dispatch = useFormDispatch();
  return useCallback(
    (error: SetFieldErrorVal | undefined) => dispatch({ error, name, type: 'setError' }),
    [dispatch, name],
  );
}
