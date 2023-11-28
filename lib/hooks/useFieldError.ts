import type { ReactNode } from 'react';

import { get } from '../helpers/object';

import useFormSelect from './useFormSelect';

/**
 * Get specific field 'error' meta info
 * - use dot chain for nested path
 */
export default function useFieldError(name: string): ReactNode | undefined {
  return useFormSelect((s) =>
    s?.submitted > 0 || get(s?.touched || {}, name) ? get(s?.errors || {}, name) : undefined,
  );
}
