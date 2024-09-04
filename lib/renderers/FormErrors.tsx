import type { ReactNode } from 'react';

import type { Data, FormState } from '../context';
import useFormSelect from '../hooks/useFormSelect';

/**
 * Access Form Errors from JSX
 */
export default function FormErrors<D = Data>({ children }: { children: (values: D) => ReactNode }) {
  const errors = useFormSelect((s) => s.errors as FormState<D>['errors']);
  return children(errors);
}
