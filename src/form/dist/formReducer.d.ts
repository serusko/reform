import { Data, FormAction, FormState } from "./FormContext";
export declare function formReducer<D extends Data = Data>(state: FormState<D>, action: FormAction<D>): FormState<D>;
