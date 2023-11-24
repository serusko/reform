import { ReactNode } from 'react';

import { useFieldValue } from '..';

interface Props<V> {
  children: (value: V | null) => ReactNode;
  name: string;
}

/**
 * Access Field Value from JSX
 */
export default function FieldValue<V = unknown>({ children, name }: Props<V>) {
  const v = useFieldValue<V>(name);
  return children(v);
}
