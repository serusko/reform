import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
import { get } from '../helpers';

import useFormSelect from './useFormSelect';

export default function useFieldIsRequired<D extends Data = Data>(name: NestedKeyOf<D>) {
  return useFormSelect((s) => {
    const r = !!get(s.required, name);
    return r;
  });
}
