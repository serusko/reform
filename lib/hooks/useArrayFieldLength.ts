import { get } from '../helpers/object';

import useFormSelect from './useFormSelect';

/**
 * Track Array value and its length
 *
 *
 */
export default function useArrayFieldLength(name: string) {
  return useFormSelect((s) => {
    const value = get(s.values, name);
    return (value && Array.isArray(value) ? value : []).length;
  });
}
