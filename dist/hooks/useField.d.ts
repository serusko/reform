import type { FieldActions, FieldMeta } from '../components/BaseFieldProps';
/**
 * Get field value, meta-info, actions for one field
 * - use dot chain for nested path
 */
export default function useField<V = unknown>(name: string): FieldMeta & FieldActions<V> & {
    value: V | null;
};
