import { Dispatch, ReactNode } from 'react';
import { Schema } from 'yup';

import { Data, FormState, ValidationFn } from '../context';
import { FormReducerAction, formReducerType } from '../formReducer';

export interface Props<D extends Data = Data> {
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
   * Keep memoized, so on change, state will be recalculated, revalidated...
   */
  initialValues?: D;

  /**
   * Handle submit
   */
  onSubmit?: (
    data: D,
    dispatch: Dispatch<FormReducerAction<D>>,
    state: FormState<D>,
  ) => void | Promise<unknown>; // TODO: !!!!

  /**
   * Form state reducer = check default formReducer for docs
   */
  reducer?: formReducerType<D>;

  /**
   * Validation schema or validation fn
   */
  validation?: Schema | ValidationFn<D>;
}
