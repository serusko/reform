import { FC, PropsWithChildren, useMemo } from 'react';

import { Data, FormState, FormStateContext, initialFormState } from '../context';

interface Props<D extends Data = Data> extends PropsWithChildren {
  /**
   * Override disabled status
   */
  disabled?: boolean;

  /**
   * Configure custom Form state
   */
  state?: FormState<D>;

  /**
   *  Override values
   */
  values?: D;
}

/**
 * Provide form state context
 * - provide static form state so values could be displayed as "view mode"
 */
const FormStateProvider: FC<Props> = ({
  children,
  disabled = true,
  state = initialFormState,
  values,
}) => {
  const contextValue = useMemo(
    (): FormState => ({
      ...state,
      disabled,
      values: values || state.values,
    }),
    [disabled, state, values],
  );

  return <FormStateContext.Provider value={contextValue}>{children}</FormStateContext.Provider>;
};

export default FormStateProvider;
