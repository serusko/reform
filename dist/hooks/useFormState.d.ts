import type { Data, FormState } from '../context';
export default function useFormState<D extends Data>(): FormState<D>;
