import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
import { get } from '../helpers';

import useFormSelect from './useFormSelect';

/**
 * Get specific field 'touched' meta info
 * - use dot chain for nested path
 */
export default function useFieldTouched<D extends Data = Data>(name: NestedKeyOf<D>): boolean {
  return useFormSelect((s) => s?.submitted > 0 || !!get(s?.touched, name));
}
