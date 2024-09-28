import { SetFieldErrorVal } from './components/BaseFieldProps';
import { NestedKeyOf } from './components/FieldProps';
import { Data, FormErrors, FormState } from './context';
/**
 * Standard form action pool
 * you can extend it with custom action
 */
type FormAction<D extends Data = Data> = {
    state?: Partial<FormState<D>>;
    type: 'init';
}
/** initialValues has changed */
 | {
    type: 'initialValues';
    value: undefined | D;
}
/** trigger form reset = clear changed, touched, use initialValues */
 | {
    type: 'reset';
}
/** set field value to null*/
 | {
    name: NestedKeyOf<D>;
    type: 'clearValue';
}
/** set field value to value from initialValues */
 | {
    name: NestedKeyOf<D>;
    type: 'resetValue';
}
/** set field value */
 | {
    name: NestedKeyOf<D>;
    type: 'setValue';
    value: unknown;
}
/** set all values */
 | {
    type: 'setValues';
    values: D;
}
/** set field error(s) */
 | {
    error: SetFieldErrorVal;
    name: string | string[];
    type: 'setError';
}
/** set errors */
 | {
    errors: Record<string, string>;
    type: 'setErrors';
}
/** mark field as touched (onBlur) */
 | {
    name: NestedKeyOf<D>;
    touched: boolean;
    type: 'setTouched';
}
/** set disabled state */
 | {
    name?: NestedKeyOf<D>;
    type: 'setDisabled';
    value: boolean;
}
/** start form submitting */
 | {
    type: 'startSubmit';
}
/** end form submitting */
 | {
    result?: unknown;
    type: 'endSubmit';
}
/** start validation process */
 | {
    errors?: FormErrors;
    type: 'startValidate';
}
/** end validation process */
 | {
    type: 'endValidate';
}
/** Use ReadOnly to display values */
 | {
    name?: string;
    type: 'setReadOnly';
    value: boolean;
};
export default FormAction;
