import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
import { get } from '../helpers/object';

import useFormSelect from './useFormSelect';

export default function useFieldIsChanged<D extends Data = Data>(name: NestedKeyOf<D>) {
  return useFormSelect((s) => {
    const val = get(s.values, name) || null;
    const init = get(s.initialValues, name) || null;
    return val !== init;
  });
}
