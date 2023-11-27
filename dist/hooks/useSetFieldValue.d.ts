/**
 * Set Field value
 * - use dot chain for nested path
 *
 * If you need to set more field values or additional info, use 'useFormDispatch'
 */
export default function useSetFieldValue<V = unknown>(name: string): (value: V | null) => void;
