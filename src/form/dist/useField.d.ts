import { InputInterface, MetaInterface, FieldHelpers } from "./";
import { Data } from "./FormContext";
export declare function useField<V = any, D extends Data = Data>(name: string): [InputInterface<V>, MetaInterface<V>, FieldHelpers<V>];
export declare function useFieldValue<V = any>(name: string): V;
