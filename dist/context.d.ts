import { ReactNode } from 'react';
import { Schema } from 'yup';
export { Schema };
export type Data = Record<string, unknown>;
export type FormErrors = Record<string, string>;
export type ValidationFn<D> = (data: D) => undefined | FormErrors | Promise<undefined | FormErrors>;
export type FormAction<D extends Data = Data> = {
    type: 'init';
} | {
    type: 'initialValues';
    value: undefined | D;
} | {
    name: string;
    type: 'onChange';
    value: unknown;
} | {
    error: undefined | string;
    name: string | string[];
    type: 'setError';
} | {
    errors: Record<string, string>;
    type: 'setErrors';
} | {
    name: string | string[];
    touched: boolean;
    type: 'setTouched';
} | {
    type: 'startSubmit';
} | {
    result?: unknown;
    type: 'endSubmit';
} | {
    type: 'setDisabled';
    value: boolean;
} | {
    errors?: FormErrors;
    type: 'startValidate';
} | {
    type: 'endValidate';
} | {
    type: 'reset';
};
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
export declare const FormStateContext: import("use-context-selector").Context<FormState<any>>;
export declare const FormActionContext: import("use-context-selector").Context<(action: FormAction) => void>;
export declare function FormStateConsumer<D extends Data = Data>({ children, }: {
    children?: (s: FormState<D>) => ReactNode;
}): import("react/jsx-runtime").JSX.Element;
