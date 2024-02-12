import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
import { get } from '../helpers/object';

import useFormSelect from './useFormSelect';

export default function useFieldIsValidating<D extends Data = Data>(name: NestedKeyOf<D>) {
  return useFormSelect((s) => get(s?.isValidatingFields, name) || !!s?.isValidating);
}
