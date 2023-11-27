import { useCallback } from 'react';

import useFormDispatch from './useFormDispatch';

export default function useSetFieldDisabled(name: string) {
  const dispatch = useFormDispatch();

  return useCallback(
    (value: boolean) => {
      dispatch({ name, type: 'setDisabled', value });
    },
    [dispatch, name],
  );
}
