import { useContextSelector } from 'use-context-selector';

import type { Data, FormState } from '../context';
import { FormStateContext } from '../context';

/**
 * "Redux like" Selector to get specific part of form state, or complete state
 */
export default function useFormSelect<D extends Data = Data, R = unknown>(
  selector: (s: FormState<D>) => R,
) {
  return useContextSelector(FormStateContext, (s) => {
    if (!s) {
      throw new Error(
        'Missing Form State Context (most probably you "useFormSelect" was called out of Form tag',
      );
    }
    return selector(s);
  });
}
