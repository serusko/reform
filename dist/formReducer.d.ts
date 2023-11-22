import { Data, FormAction, FormState, ValidationFn } from './context';
export declare function setIn(obj: Data, path: string, value: unknown): void;
export declare function getIn(obj: Data, path: string): any;
export type FormReducerAction<D extends Data> = FormAction<D>;
export type formReducerType<D extends Data> = (s: FormState<D>, a: FormReducerAction<D>, c?: formReducerType<D>[] | formReducerType<D>) => FormState<D>;
/**
 * Default reducer
 */
export declare function getDefaultFormReducer<D extends Data = Data>(validate: ValidationFn<D>): formReducerType<D>;
