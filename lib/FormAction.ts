import { SetFieldErrorVal } from './components/BaseFieldProps';
import { Data, FormErrors } from './context';

/**
 * Standard form action pool
 * you can extend it with custom action
 */
type FormAction<D extends Data = Data> =
  /** reducer initialized */
  | { initialValues?: D; type: 'init' }
  /** initialValues has changed */
  | { type: 'initialValues'; value: undefined | D }
  /** trigger form reset = clear changed, touched, use initialValues */
  | { type: 'reset' }
  /** set field value to null*/
  | { name: string; type: 'clearValue' }
  /** set field value to value from initialValues */
  | { name: string; type: 'resetValue' }
  /** set field value */
  | { name: string; type: 'setValue'; value: unknown }
  /** set all values */
  | { type: 'setValues'; values: D }
  /** set field error(s) */
  | { error: SetFieldErrorVal; name: string | string[]; type: 'setError' }
  /** set errors */
  | { errors: Record<string, string>; type: 'setErrors' }
  /** mark field as touched (onBlur) */
  | { name: string | string[]; touched: boolean; type: 'setTouched' }
  /** set disabled state */
  | { type: 'setDisabled'; value: boolean }
  /** start form submitting */
  | { type: 'startSubmit' }
  /** end form submitting */
  | { type: 'endSubmit' }
  /** start validation process */
  | { errors?: FormErrors; type: 'startValidate' }
  /** end validation process */
  | { type: 'endValidate' };

export default FormAction;
