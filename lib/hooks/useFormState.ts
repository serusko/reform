import { useContext } from 'react';

import type { Data, FormState } from '../context';
import { FormStateContext } from '../context';

export default function useFormState<D extends Data>(): FormState<D> {
  return useContext(FormStateContext) as FormState<D>;
}
