import type { Data, FormState } from '../context';
import useFormSelect from '../hooks/useFormSelect';

export default function useFormState<D extends Data = Data>() {
  return useFormSelect<D>((s) => s as FormState<D>);
}
