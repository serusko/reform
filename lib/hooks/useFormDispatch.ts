import { useContext } from 'react';

import type { Data, FormAction } from '../context';
import { FormActionContext } from '../context';

/**
 * Form dispatch action
 * trigger formReducer action
 */
export default function useFormDispatch<
  D extends Data = Data,
  A extends FormAction<D> = FormAction<D>,
>(): (action: A) => void {
  return useContext(FormActionContext) as (action: A) => void;
}
