import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
export default function useFieldIsReadonly<D extends Data = Data>(name: NestedKeyOf<D>): boolean;
