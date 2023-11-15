import { ReactNode } from 'react';

import { Data, FormAction } from '../context';
import { useFormDispatch } from '../hooks';

interface Props<D extends Data = Data, A = FormAction<D>> {
  children: (dispatch: (action: A) => void) => ReactNode;
}

function FormDispatchConsumer<D extends Data = Data, A = FormAction<D>>({ children }: Props<D, A>) {
  const dispatch = useFormDispatch<D, A>();

  return <>{children(dispatch)}</>;
}

export default FormDispatchConsumer;
