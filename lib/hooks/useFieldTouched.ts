import useFormSelect from './useFormSelect';

/**
 * Get specific field 'touched' meta info
 * - use dot chain for nested path
 */
export default function useFieldTouched(name: string): boolean {
  return useFormSelect((s) => !!s.touched[name]);
}