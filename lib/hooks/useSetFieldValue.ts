import { useCallback } from 'react';

import useFormDispatch from './useFormDispatch';

/**
 * Set Field value
 * - use dot chain for nested path
 *
 * If you need to set more field values or additional info, use 'useFormDispatch'
 */
export default function useSetFieldValue<V = unknown>(name: string) {
  const dispatch = useFormDispatch();
  return useCallback((value: V) => dispatch({ name, type: 'setValue', value }), [dispatch, name]);
}
