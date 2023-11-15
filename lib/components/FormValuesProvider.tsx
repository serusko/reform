import { FC, PropsWithChildren } from 'react';

import { Data, FormStateContext } from '../context';
import { useFormState } from '../hooks';

interface Props extends PropsWithChildren {
  disabled?: boolean;
  values: Data;
}

/**
 * Simple helper for providing form values when we don't need to have setup whole form env, we just need to read values from context
 * so Field components could be reused for Read-only purpose
 */
const FormValuesProvider: FC<Props> = ({ children, disabled = true, values }) => {
  const state = useFormState();

  return (
    <FormStateContext.Provider
      value={{
        ...state,
        disabled: disabled === undefined ? state.disabled : disabled,
        values,
      }}
    >
      {children}
    </FormStateContext.Provider>
  );
};

export default FormValuesProvider;
