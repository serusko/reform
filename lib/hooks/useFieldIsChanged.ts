import { get } from '../helpers/object';

import useFormSelect from './useFormSelect';

export default function useFieldIsChanged(name: string) {
  return useFormSelect((s) => {
    const val = get(s.values, name) || null;
    const init = get(s.initialValues || {}, name) || null;
    return val !== init;
  });
}
