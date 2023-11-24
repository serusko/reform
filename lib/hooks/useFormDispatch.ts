import { useContext } from 'use-context-selector';

import { Data, FormAction, FormActionContext } from '../context';

/**
 * Form dispatch action
 * trigger formReducer action
 */
export default function useFormDispatch<
  D extends Data = Data,
  A extends FormAction<D> = FormAction<D>,
>(): (action: A) => void {
  const d = useContext(FormActionContext) as (action: A) => void;

  return d || (() => {});
}
