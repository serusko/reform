import type FormState from '../FormState';
import { get } from '../helpers/object';

import useFormSelect from './useFormSelect';

/**
 * Get specific field value
 * - use dot chain for nested path
 */
export default function useFieldValue<V = unknown>(name: string): V | null {
  return useFormSelect((s: FormState) => (get(s.values || {}, name) || null) as V | null);
}
