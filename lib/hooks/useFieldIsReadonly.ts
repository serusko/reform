import { get } from '../helpers/object';

import useFormSelect from './useFormSelect';

export default function useFieldIsReadonly(name: string) {
  return useFormSelect((s) => {
    const specific = get(s.readonlyFields, name);
    return typeof specific === 'boolean' ? specific : !!s.readOnly;
  });
}
