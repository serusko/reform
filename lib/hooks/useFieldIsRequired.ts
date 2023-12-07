import { get } from '../helpers/object';

import useFormSelect from './useFormSelect';

export default function useFieldIsRequired(name: string) {
  return useFormSelect((s) => !!get(s?.required, name));
}
