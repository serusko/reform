import { ReactNode } from 'react';

import useFormSelect from './useFormSelect';

/**
 * Get specific field 'error' meta info
 * - use dot chain for nested path
 */
export default function useFieldError(name: string): ReactNode | undefined {
  return useFormSelect((s) => s.errors[name]);
}
