import { ReactNode } from 'react';
import { SetFieldErrorVal } from './components/BaseFieldProps';
export type Data = Record<string, unknown>;
export type FormErrors = Record<string, ReactNode>;
export type ValidationFn<D> = (data: D) => undefined | FormErrors;
export type Schema = any;
/**
 * Standard form action ppol
 * you can extend it with custom action
 */
export type FormAction<D extends Data = Data> = 
/** reducer initialized */
{
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
    name: string;
    type: 'clearValue';
}
/** set field value to value from initialValues */
 | {
    name: string;
    type: 'resetValue';
}
/** set field value */
 | {
    name: string;
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
    name: string | string[];
    touched: boolean;
    type: 'setTouched';
}
/** set disabled state */
 | {
    type: 'setDisabled';
    value: boolean;
}
/** start form submitting */
 | {
    type: 'startSubmit';
}
/** end form submitting */
 | {
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
};
/**
 * Form state context type
 */
export interface FormState<D extends Data = Data> {
    /**
     * List of fields changed by onChange event
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
     * - undefined = in progress / unknown / not yet validated
     */
    isValid: undefined | boolean;
    /**
     * In case of async validation, indicate progress
     */
    isValidating: boolean;
    /**
     * Remember last action type
     */
    lastAction: FormAction<D>['type'] | string;
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
     * Register single fields which has being validated asynchronously
     * - could be used as remark for blocking submitting = wait until ready
     *
     */
    validatingFields?: Record<string, boolean>;
    /**
     * Form data values
     * could be nested object, we use dot chain to select specific value
     * like: "tebName.paperCard.fieldSet.paramName" or "tabName.arrayTable.3.name" for arrays
     */
    values: D;
}
export declare const initialFormState: FormState<Data>;
export declare const FormStateContext: import("use-context-selector").Context<FormState<any>>;
export declare const FormActionContext: import("use-context-selector").Context<(action: FormAction) => void>;
