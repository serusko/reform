import { PropsWithChildren } from 'react';
import { useContextSelector } from 'use-context-selector';

import { Data, FormState, FormStateContext } from '../context';

interface Props<D extends Data> extends PropsWithChildren {
  condition: (s: FormState<D>) => boolean;
}

const FormRender = <D extends Data = Data>({ children, condition }: Props<D>) => {
  const render = useContextSelector(FormStateContext, condition);

  if (render) {
    return <>{children}</>;
  }

  return null;
};

export default FormRender;
