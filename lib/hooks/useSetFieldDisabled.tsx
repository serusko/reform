import { useCallback } from 'react';

import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';

import useFormDispatch from './useFormDispatch';

export default function useSetFieldDisabled<D extends Data = Data>(name?: NestedKeyOf<D>) {
  const dispatch = useFormDispatch<D>();

  return useCallback(
    (value: boolean) => {
      dispatch({ name, type: 'setDisabled', value });
    },
    [dispatch, name],
  );
}
