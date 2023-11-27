import { get } from '../helpers/object';

import useFormSelect from './useFormSelect';

export default function useIsFieldDisabled(name: string) {
  return useFormSelect((s) => {
    const specific = get(s?.disabledFields || {}, name);
    return typeof specific === 'boolean' ? specific : !!s?.disabled;
  });
}
