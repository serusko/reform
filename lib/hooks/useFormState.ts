import { useContext } from 'use-context-selector';

import { Data, FormState, FormStateContext } from '../context';

export default function useFormState<D extends Data>(): FormState<D> {
  return useContext(FormStateContext) as FormState<D>;
}
