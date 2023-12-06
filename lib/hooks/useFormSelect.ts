import { useContext, useEffect, useState } from 'react';

import { Data, FormState, FormStateContext } from '../context';

export default function useFormSelect<D extends Data = Data, R = unknown>(
  selector: (s: FormState<D>) => R,
) {
  const contextValue = useContext(FormStateContext);
  const [selectedValue, setSelectedValue] = useState(selector(contextValue));
  useEffect(() => {
    const newSelectedValue = selector(contextValue);
    if (!Object.is(selectedValue, newSelectedValue)) {
      setSelectedValue(newSelectedValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector, contextValue]);

  return selectedValue;
}
