import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
import { get } from '../helpers/object';

import useFormSelect from './useFormSelect';

export default function useFieldIsReadonly<D extends Data = Data>(name: NestedKeyOf<D>) {
  return useFormSelect((s) => {
    const specific = get(s.readonlyFields, name);
    return typeof specific === 'boolean' ? specific : !!s.readOnly;
  });
}
