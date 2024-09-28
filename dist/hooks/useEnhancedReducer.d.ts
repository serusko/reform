import { Dispatch, Reducer } from 'react';
type Action = {
    [key: string]: unknown;
    type: unknown;
};
type Middleware<S, A extends Action = Action> = (state: S) => (getState: () => S, dispatch: Dispatch<A>) => (next: Dispatch<A>) => (action: A) => void;
/**
 * Enhanced useReducer with custom middleware
 * put 3rd prop with
 */
export default function useEnhancedReducer<S, A extends Action = Action>(reducer: Reducer<S, A>, initState: S, middlewares?: Middleware<S, A>[]): readonly [S, Dispatch<A>, () => S];
export {};
