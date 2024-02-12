import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
export default function useFieldInitialValue<D extends Data = Data>(name: NestedKeyOf<D>): any;
