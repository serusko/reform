import type { Data, FormAction } from '../context';
/**
 * Form dispatch action
 * trigger formReducer action
 */
export default function useFormDispatch<D extends Data = Data, A extends FormAction<D> = FormAction<D>>(): (action: A) => void;
