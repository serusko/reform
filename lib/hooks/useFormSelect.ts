import { useContext, useEffect, useState } from 'react';

import { Data, FormState, FormStateContext } from '../context';

export default function useFormSelect<D extends Data = Data, R = unknown>(
  selector: (s: FormState<D>) => R,
) {
  const formStateSub = useContext(FormStateContext);
  const [selectedValue, setSelectedValue] = useState(selector(formStateSub.getState()));

  useEffect(() => {
    const callback = (newState: FormState<D>) => {
      const newSelectedValue = selector(newState);
      if (!Object.is(selectedValue, newSelectedValue)) {
        setSelectedValue(newSelectedValue);
      }
    };

    formStateSub.subscribe(callback);
    return () => formStateSub.unsubscribe(callback);
  }, [selector, selectedValue, formStateSub]);

  return selectedValue;
}
