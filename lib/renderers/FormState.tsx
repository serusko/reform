import type { ReactNode } from 'react';

import type { Data, FormState as FormStateType } from '../context';
import useFormSelect from '../hooks/useFormSelect';

interface Props<D extends Data> {
  children: ReactNode | ((s: FormStateType<D>) => ReactNode);
  condition?: (s: FormStateType<D>) => boolean;
}

/**
 * Conditionally render children content based on selector (must return truthy value)
 * TODO: double-check optimization - memoize child ? condition ?
 */
export default function FormState<D extends Data = Data>({ children, condition }: Props<D>) {
  // track form state changes or if not needed just return false always
  const state = useFormSelect<D, FormStateType<D> | false>((s) =>
    typeof children === 'function' ? s : false,
  );
  // conditional rendering - if provided - calculate, return true otherwise
  const render = useFormSelect(condition || (() => true));

  if (condition && !render) {
    return null;
  }

  return <>{typeof children === 'function' && !!state ? children(state) : children}</>;
}
