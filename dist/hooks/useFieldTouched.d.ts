import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
/**
 * Get specific field 'touched' meta info
 * - use dot chain for nested path
 */
export default function useFieldTouched<D extends Data = Data>(name: NestedKeyOf<D>): boolean;
