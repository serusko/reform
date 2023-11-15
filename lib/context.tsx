import { createContext } from 'use-context-selector';

import { initialFormState } from './constants';

export type Data = Record<string, unknown>;
export type FormErrors = Record<string, string>;
export type ValidationFn<D> = (data: D) => undefined | FormErrors | Promise<undefined | FormErrors>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Schema = any;

/**
 * Standard form action ppol
 * you can extend it with custom action
 */
export type FormAction<D extends Data = Data> =
  /** reducer initialized */
  | { type: 'init' }
  /** initialValues has changed */
  | { type: 'initialValues'; value: undefined | D }
  /** onChange called */
  | { name: string; type: 'onChange'; value: unknown }
  /** set custom error */
  | { error: undefined | string; name: string | string[]; type: 'setError' }
  /** set custom errors (override state) */
  | { errors: Record<string, string>; type: 'setErrors' }
  /** setFieldTouched (onBlur) */
  | { name: string | string[]; touched: boolean; type: 'setTouched' }
  /** Start form submitting */
  | { type: 'startSubmit' }
  /** End form submitting */
  | { result?: unknown; type: 'endSubmit' }
  /** set disabled state */
  | { type: 'setDisabled'; value: boolean }
  /** start Validation process */
  | { errors?: FormErrors; type: 'startValidate' }
  /** end Validation process */
  | { type: 'endValidate' }
  /** trigger form reset = clear changed, touched, use initialValues */
  | { type: 'reset' };

/**
 * Form state context type
 */
export interface FormState<D extends Data = Data> {
  /**
   * List of fields changed by human interactions
   */
  changed: Record<string, boolean>;
  /**
   * control if all form should be disabled
   */
  disabled?: boolean;
  /**
   * Override default disabled state
   * - if global is yes (true) -> choose those which could be edited
   * - if global is no (false/undefined) -> disable some specific fields
   */
  disabledFields?: Record<string, boolean>;
  /**
   * Error map
   * [fieldName]: "error message"
   */
  errors: FormErrors;
  /**
   * Initial errors
   * so you can prefill errors before first validation
   */
  initialErrors: FormErrors;
  /**
   * Initial touched map
   * so you can control what errors will be displayed immediately
   */
  initialTouched?: Record<string, boolean>;
  /**
   * Initial data cst from parent
   * every time they changed, "init" action should be triggered
   * so keep it memoized
   */
  initialValues?: D;
  /**
   * if onSubmit is Promise, Form is tracking promise
   */
  isSubmitting?: boolean;
  /**
   * Data are valid with provided schema
   */
  isValid: boolean;
  /**
   * Remember last action type
   */
  lastAction: FormAction<D>['type'] | string;
  /**
   * Propagate form submit promise result
   */
  submitResult?: unknown;
  /**
   * Number of times of successful submit (valid data submitted)
   */
  submitted: number;
  /**
   * Fields touched by human interactions
   * - collected mostly via onBlur event,
   * - could be implemented by onChange (depends on input)
   */
  touched: Record<string, boolean>;
  /**
   * Form data values
   * could be nested object, we use dot chain to select specific value
   * like: "tebName.paperCard.fieldSet.paramName"
   */
  values: D;
}

// bcs var cannot be Generic
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FormStateContext = createContext<FormState<any>>(initialFormState);
export const FormActionContext = createContext<(action: FormAction) => void>(() => undefined);
