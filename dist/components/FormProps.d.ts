import { Dispatch, ReactNode } from 'react';

import { Data, FormAction, FormState, ValidationFn } from '../context';
import { FormReducerAction, formReducerType } from '../formReducer';

export default interface FormProps<D extends Data = Data> {
  /**
   * Render Form content
   */
  children?: ReactNode;
  /**
   * HTML Form tag className
   */
  className?: string;

  /**
   * Default disabled status - could be overridden by specific field
   */
  disabled?: boolean;

  /**
   * Define specific fields with disabled state
   */
  disabledFields?: Record<string, boolean>;

  /**
   * Html Id
   * used for triggering submit with button element
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#form
   */
  id?: string;

  /**
   * Initial Form values,
   * Keep memoized !!!, so once is changed change, state will be recalculated, revalidated... RESET
   */
  initialValues?: D;

  /**
   * Track state changes
   * - you can customize callback on state change and trigger updates via dispatch like onSubmit
   */
  onStateUpdate?: (
    action: FormAction<D>,
    prev: FormState<D>,
    next: FormState<D>,
    dispatch: Dispatch<FormReducerAction<D>>,
  ) => void;

  /**
   * Handle submit
   */
  onSubmit?: <R = unknown>(data: D) => void | Promise<R>;

  /**
   * Form state reducer = check default formReducer for docs
   */
  reducer?: formReducerType<D>;

  /**
   * Validation schema or validation fn
   */
  validation?: ValidationFn<D>;
}
