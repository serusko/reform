import { get } from '../helpers/object';

import useFormSelect from './useFormSelect';

export default function useFieldIsValidating(name: string) {
  return useFormSelect((s) => get(s?.isValidatingFields || {}, name) || !!s?.isValidating);
}
