import type { ReactNode } from 'react';

import type { Data, FormAction } from '../context';
import useFormDispatch from '../hooks/useFormDispatch';

interface FormDispatchConsumerProps<D extends Data = Data, A = FormAction<D>> {
  children: (dispatch: (action: A) => void) => ReactNode;
}

/**
 * Make available dispatch action from JSX
 */
export function FormDispatch<D extends Data = Data, A extends FormAction<D> = FormAction<D>>({
  children,
}: FormDispatchConsumerProps<D, A>) {
  const dispatch = useFormDispatch<D, A>();

  return <>{children(dispatch)}</>;
}
