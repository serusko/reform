import type { ReactNode } from 'react';

import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
import { get } from '../helpers';

import useFormSelect from './useFormSelect';

/**
 * Get specific field 'error' meta info
 * - use dot chain for nested path
 */
export default function useFieldError<D extends Data = Data>(
  name: NestedKeyOf<D>,
): ReactNode | undefined {
  return useFormSelect((s) =>
    s?.submitted > 0 || get(s?.touched, name) ? get(s?.errors, name) : undefined,
  );
}
