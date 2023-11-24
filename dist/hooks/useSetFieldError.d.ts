import { SetFieldErrorVal } from '../components/BaseFieldProps';
/**
 * Set field error manually
 * - use dot chain for nested path
 *
 * If you need to set more field values or additional info, use 'useFormDispatch'
 */
export default function useSetFieldError(name: string): (error: SetFieldErrorVal | undefined) => void;
