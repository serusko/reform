import { FieldActions, FieldMeta } from '../components/BaseFieldProps';
import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
/**
 * Get field value, meta-info, actions for one field
 * - use dot chain for nested path
 */
export default function useField<V = unknown, D extends Data = Data>(name: NestedKeyOf<D>): FieldMeta & FieldActions<V> & {
    value: V | null;
};
