import { useCallback, useMemo } from 'react';

import useFormDispatch from './useFormDispatch';
import useFormSelect from './useFormSelect';

type SubmitForm = (() => void) & [boolean, () => void];

/**
 * Submit helper to trigger form Submit action
 * - Returns 2 types same time
 * 1. callback to trigger submit action
 * 2. tuple [boolean,  ()=>void] - [submitting status, validating status, dispatch submit fn]
 * - TODO: think about passing callback - onSubmit
 */
export default function useFormSubmit(): SubmitForm {
  const dispatch = useFormDispatch();
  const isSubmitting = useFormSelect((s) => !!s.isSubmitting);

  const start = useCallback(() => {
    dispatch({ type: 'startSubmit' });
  }, [dispatch]);

  return useMemo((): SubmitForm => {
    const res = start as SubmitForm;
    res[0] = isSubmitting;
    res[1] = start;
    return res;
  }, [isSubmitting, start]);
}
