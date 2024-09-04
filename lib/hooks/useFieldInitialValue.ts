import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
import { get } from '../helpers';

import useFormSelect from './useFormSelect';

export default function useFieldInitialValue<D extends Data = Data>(name: NestedKeyOf<D>) {
  return useFormSelect((s) => get(s?.initialValues, name) || null);
}
