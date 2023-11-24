import { ReactNode } from 'react';

import { Data } from '../context';
import useFormSelect from '../hooks/useFormSelect';

/**
 * Access Form Errors from JSX
 */
export default function FormErrors<D = Data>({ children }: { children: (values: D) => ReactNode }) {
  const values = useFormSelect((s) => s.errors as D);
  return children(values);
}
