import { ReactNode, ReactElement } from "react";
import * as Yup from "yup";
import { FormState, FormAction } from "./FormContext";
import type { Data } from "./FormContext";
export interface FormProps<D extends Data = Data> {
    children?: ReactNode;
    /** Default disabled status - could be overridden by specific field */
    disabled?: boolean;
    /** Define specific fields with disabled state */
    disabledFields?: Record<string, boolean>;
    /** HTML ID to trigger form by <button form="..." */
    id?: string;
    /** Keep memoized */
    initialValues?: D;
    /** Default reducer will display Toast for all validation errors onSubmit */
    logErrors?: boolean;
    onSubmit?: (data: D) => void;
    /** Form state reducer = check default formReducer for docs */
    reducer?: (s: FormState<D>, a: FormAction<D>) => FormState<D>;
    /** Validation schema = one time initialization = use custom reducer to change schema */
    schema?: Yup.SchemaOf<D>;
}
export declare function Form<D extends Data = Data>({ disabledFields, initialValues, logErrors, disabled, children, onSubmit, schema, id, ...props }: FormProps<D>): ReactElement;
