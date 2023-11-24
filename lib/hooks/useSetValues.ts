import { useCallback } from 'react';

import { Data } from '../context';

import useFormDispatch from './useFormDispatch';

export default function useSetValues<D extends Data = Data>() {
  const dispatch = useFormDispatch();
  return useCallback((values: D) => dispatch({ type: 'setValues', values }), [dispatch]);
}
