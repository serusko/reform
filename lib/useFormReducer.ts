import { Dispatch, MutableRefObject, useCallback, useReducer, useRef } from 'react';

import FormProps from './components/FormProps';
import { initialFormState } from './context';
import { FormReducerAction, formReducerType } from './formReducer';

import { Data, FormAction, FormState } from '.';

export default function useFormReducer<D extends Data>(
  formReducer: formReducerType<D>,
  initialValues: undefined | D,
  disabled: boolean,
  readOnly: boolean,
  onSubmitRef: MutableRefObject<FormProps<D>['onSubmit']>,
  onStateUpdateRef: MutableRefObject<FormProps<D>['onStateUpdate']>,
) {
  const dispatchRef = useRef<Dispatch<FormReducerAction<D>>>();

  const on = useRef((action: FormAction<D>, prev: FormState<D>, next: FormState<D>) => {
    const dispatch = dispatchRef.current;
    const onSubmit = onSubmitRef.current;
    const onStateUpdate = onStateUpdateRef.current;

    // check if we have already initialized form context providers and reducer properly
    if (!dispatch) {
      console.error('Cannot access to Dispatch trigger inside "on" action'); // TODO: improve error handling
      return;
    }

    // trigger onSubmit
    if (onSubmit && action.type === 'startSubmit' && next.isSubmitting && !prev.isSubmitting) {
      const res = onSubmit?.(next.values);

      if (res && typeof res.then === 'function') {
        res.finally(() => dispatch({ type: 'endSubmit' }));
      }
    }

    // TODO: console log errors when user "rage-click" submit action multiple times (errors are not displayed properly)

    // trigger custom watchers
    if (onStateUpdate) {
      onStateUpdate(action, prev, next, dispatch);
    }
  });

  const eventFormReducer: formReducerType<D> = useCallback(
    (prevState: FormState<D>, action: FormAction<D>) => {
      const nextState = formReducer(prevState, action);
      on.current(action, prevState, nextState);
      return nextState;
    },
    [formReducer, on],
  );

  const r = useReducer<formReducerType<D>, FormState<D>>(
    eventFormReducer,
    initialFormState as FormState<D>,
    (i: FormState<D>) =>
      formReducer(
        {
          ...i,
          disabled,
          initialValues: initialValues || ({} as D),
          readOnly,
          values: initialValues || ({} as D),
        },
        { type: 'init' },
      ),
  );

  dispatchRef.current = r[1];
  return r;
}
