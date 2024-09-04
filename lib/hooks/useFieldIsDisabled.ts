import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
import { get } from '../helpers';

import useFormSelect from './useFormSelect';

export default function useIsFieldDisabled<D extends Data = Data>(name: NestedKeyOf<D>) {
  return useFormSelect((s) => {
    const specific = get(s?.disabledFields, name);
    return typeof specific === 'boolean' ? specific : !!s?.disabled;
  });
}
