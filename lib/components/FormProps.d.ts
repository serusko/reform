import type { Dispatch, ReactNode } from 'react';

import type { Data, FormAction, FormState, ValidationFn } from '../context';
import type { FormReducerAction, formReducerType } from '../formReducer';

interface FormStateProps<D> {
  /**
   * Default disabled status - could be overridden by specific field
   * - once changed, re-renders form with updated state
   */
  disabled?: boolean;

  /**
   * Initial Form values,
   * !!! KEEP REF STABLE - once its changed, state will be reset (cleared and used new initial values)
   */
  initialValues?: D;

  /**
   * Readonly state
   * - values are submitted and focusable
   * - once changed, re-renders form with updated state
   */
  readOnly?: boolean;
}

interface FormCustomizationProps<D> {
  /**
   * resolve required fields
   */
  getRequired?: (data: D) => Record<string, boolean>;

  /**
   * Form state reducer = check default formReducer for docs
   * !!! KEEP REF STABLE - triggers reset of whole form state
   */
  reducer?: formReducerType<D>;

  /**
   * Validation schema or validation fn
   * !!! KEEP REF STABLE - triggers reset of whole form state
   */
  validation?: ValidationFn<D>;
}

interface FormHtmlProps {
  /**
   * Customize html tag
   */
  className?: string;
  /**
   * Html Id
   * used for triggering submit with button element
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#form
   * changing ID re-renders <form> element
   */
  id?: string;
}

export default interface FormProps<D extends Data = Data>
  extends FormStateProps<D>,
    FormCustomizationProps<D>,
    FormHtmlProps {
  /**
   * Form children content
   * - pass React Elements
   * - or function which accepts form State, and Dispatch action
   */
  children: ReactNode | ((s: FormState<D>, d: Dispatch<FormAction<D>>) => ReactNode);

  /**
   * Track state changes
   * - you can customize callback on state change and trigger updates via dispatch like onSubmit
   * - does not trigger re-renders, just listening for changes
   */
  onStateUpdate?: (
    action: FormAction<D>,
    prev: FormState<D>,
    next: FormState<D>,
    dispatch: Dispatch<FormReducerAction<D>>,
  ) => void;

  /**
   * Handle submit
   * - does not trigger re-renders, just listening for changes
   */
  onSubmit?: <R = unknown>(data: D) => void | Promise<R>;
}
