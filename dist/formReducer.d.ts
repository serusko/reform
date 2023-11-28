import type { Data, ValidationFn, FormState, FormAction } from './context';
export type FormReducerAction<D extends Data> = FormAction<D>;
export type formReducerType<D extends Data> = (s: FormState<D>, a: FormReducerAction<D>, c?: formReducerType<D>[] | formReducerType<D>) => FormState<D>;
/**
 * Default reducer
 * - provide validation fn
 */
export declare function getDefaultFormReducer<D extends Data = Data>(validate?: ValidationFn<D>, getRequired?: (data: D) => Record<string, boolean>): formReducerType<D>;
