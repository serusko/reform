import { useCallback, useMemo, useReducer, useRef, Dispatch, Reducer } from 'react';

type Action<T = string> = { [key: string]: unknown; type: T };

type Middleware<S, A extends Action = Action> = (
  state: S,
) => (getState: () => S, dispatch: Dispatch<A>) => (next: Dispatch<A>) => (action: A) => void;

/**
 * Enhanced useReducer with custom middleware
 * put 3rd prop with
 */
export default function useEnhancedReducer<S, A extends Action = Action>(
  reducer: Reducer<S, A>,
  initState: S,
  middlewares: Middleware<S, A>[] = [],
) {
  // last active state
  const lastState = useRef(initState);

  // state getter
  const getState = useCallback(() => lastState.current, []);

  // to prevent reducer called twice, per: https://github.com/facebook/react/issues/16295
  const enhancedReducer = useRef(
    (state: S, action: A) => (lastState.current = reducer(state, action)),
  ).current;

  // basic reducer instance
  const [state, dispatch] = useReducer(enhancedReducer, initState);

  const middlewaresRef = useRef(middlewares);

  const enhancedDispatch = useMemo(
    () =>
      middlewaresRef.current.reduceRight(
        (next, mdw) => (action) => mdw(state)(getState, dispatch)(next)(action),
        dispatch,
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return [state, enhancedDispatch, getState] as const;
}
