import { get } from '../helpers/object';

import useFormSelect from './useFormSelect';

export default function useFieldInitialValue(name: string) {
  return useFormSelect((s) => get(s?.initialValues, name) || null);
}
