import { PropsWithChildren } from 'react';

import { Data, FormState } from '../context';
import useFormSelect from '../hooks/useFormSelect';

interface FormRenderProps<D extends Data> extends PropsWithChildren {
  condition: (s: FormState<D>) => boolean;
}

/**
 * Conditionally render children content based on selector (must return truthy value)
 * TODO: double-check optimization - memoize child ? condition ?
 */
export const FormStateRender = <D extends Data = Data>({
  children,
  condition,
}: FormRenderProps<D>) => {
  const render = useFormSelect(condition);

  if (render) {
    return <>{children}</>;
  }

  return null;
};
