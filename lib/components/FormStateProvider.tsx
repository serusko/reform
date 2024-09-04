import { FC, PropsWithChildren, useMemo } from 'react';

import { Data, FormState, FormStateContext, getInitialFormState } from '../context';

interface Props<D extends Data = Data> extends PropsWithChildren {
  /**
   * Override disabled status
   */
  isDisabled?: boolean;

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
  isDisabled = true,
  state = getInitialFormState(),
  values,
}) => {
  const contextValue = useMemo(
    (): FormState => ({
      ...state,
      isDisabled,
      values: values || state.values,
    }),
    [isDisabled, state, values],
  );

  return <FormStateContext.Provider value={contextValue}>{children}</FormStateContext.Provider>;
};

export default FormStateProvider;
