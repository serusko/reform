import { Data } from '../context';
export default function useSetValues<D extends Data = Data>(): (values: D) => void;
