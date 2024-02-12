import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
/**
 * Get specific field value
 * - use dot chain for nested path
 */
export default function useFieldValue<V = unknown, D extends Data = Data>(name: NestedKeyOf<D>): V | null;
