import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
export default function useFieldIsRequired<D extends Data = Data>(name: NestedKeyOf<D>): boolean;
