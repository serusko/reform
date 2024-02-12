import type { SetFieldErrorVal } from '../components/BaseFieldProps';
import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
/**
 * Set field error manually
 * - use dot chain for nested path
 *
 * If you need to set more field values or additional info, use 'useFormDispatch'
 */
export default function useSetFieldError<D extends Data = Data>(name: NestedKeyOf<D>): (error: SetFieldErrorVal | undefined | Promise<SetFieldErrorVal | undefined>) => void;
