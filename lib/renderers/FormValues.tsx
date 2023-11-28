import type { ReactNode } from 'react';

import type { Data } from '../context';
import useFormSelect from '../hooks/useFormSelect';

/**
 * Access Form Values from JSX
 */
export default function FormValues<D = Data>({ children }: { children: (values: D) => ReactNode }) {
  const values = useFormSelect((s) => s.values as D);
  return children(values);
}
