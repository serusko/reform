import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
/**
 * Set Field value
 * - use dot chain for nested path
 *
 * If you need to set more field values or additional info, use 'useFormDispatch'
 */
export default function useSetFieldValue<V = unknown, D extends Data = Data>(name: NestedKeyOf<D>): (value: V | null) => void;
