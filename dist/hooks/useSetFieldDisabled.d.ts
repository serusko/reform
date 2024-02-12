import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
export default function useSetFieldDisabled<D extends Data = Data>(name?: NestedKeyOf<D>): (value: boolean) => void;
