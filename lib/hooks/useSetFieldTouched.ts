import { useCallback } from 'react';

import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';

import useFormDispatch from './useFormDispatch';

/**
 * Mark field as touched
 * - value defaults to true
 * - use dot chain for nested path
 *
 * If you need to set more field values or additional info, use 'useFormDispatch'
 */
export default function useSetSetFieldTouched<D extends Data = Data>(name: NestedKeyOf<D>) {
  const dispatch = useFormDispatch();
  return useCallback(
    (touched: boolean = true) => dispatch({ name, touched, type: 'setTouched' }),
    [dispatch, name],
  );
}
