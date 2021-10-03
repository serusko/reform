import { ReactNode } from "react";
import { FieldInputProps } from "formik";
import type { FieldMetaProps, FieldHelperProps } from "formik";
import { Form } from "./Form";
export interface DetailInterface<V = null> {
    changed?: boolean;
    /** Field has an error */
    error?: boolean;
    /** Display additional description */
    helperText?: ReactNode;
    /** Field label */
    label?: ReactNode;
    /** Property name */
    name?: string;
    /** Property value */
    value?: V;
}
export interface InputInterface<V = any> extends FieldInputProps<V> {
    disabled?: boolean;
}
export interface MetaInterface<V = any> extends FieldMetaProps<V> {
    initialTouched: boolean;
    initialError?: string;
    disabled: boolean;
    changed: boolean;
    initialValue?: V;
}
export interface FieldHelpers<V = any> extends FieldHelperProps<V> {
}
declare const _default: {
    readonly Form: typeof Form;
};
export default _default;
