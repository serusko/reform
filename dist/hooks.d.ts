import { SetFieldErrorVal } from './components/BaseFieldProps';
import { FormState, Data, FormAction } from './context';
/**
 * Get field value, meta-info, actions for one field
 * - use dot chain for nested path
 */
export declare function useField<V = unknown>(name: string): {
    error: string | undefined;
    initialValue: unknown;
    isChanged: boolean;
    isDisabled: boolean;
    isRequired: boolean;
    isTouched: boolean;
    name: string;
    onBlur: () => void;
    onChange: (value: unknown) => void;
    setError: (error: SetFieldErrorVal) => void;
    setValue: (value: unknown) => void;
    value: V;
};
/**
 * Get specific field value
 * - use dot chain for nested path
 */
export declare function useFieldValue<V = unknown>(name: string): V;
/**
 * Get specific field 'error' meta info
 * - use dot chain for nested path
 */
export declare function useFieldError(name: string): string | undefined;
/**
 * Get specific field 'touched' meta info
 * - use dot chain for nested path
 */
export declare function useFieldTouched(name: string): boolean;
/**
 * Set Field value
 * - use dot chain for nested path
 *
 * If you need to set more field values or additional info, use 'useFormDispatch'
 */
export declare function useSetFieldValue<V = unknown>(name: string): (value: V) => void;
export declare function useSetValues<D extends Data = Data>(): (values: D) => void;
/**
 * Mark field as touched
 * - value defaults to true
 * - use dot chain for nested path
 *
 * If you need to set more field values or additional info, use 'useFormDispatch'
 */
export declare function useSetSetFieldTouched(name: string): (touched?: boolean) => void;
/**
 * Set field error manually
 * - use dot chain for nested path
 *
 * If you need to set more field values or additional info, use 'useFormDispatch'
 */
export declare function useSetFieldError(name: string): (error: SetFieldErrorVal | undefined) => void;
/**
 * "Redux like" Selector to get specific part of form state, or complete state
 */
export declare function useFormSelect<D extends Data = Data, R = unknown>(selector: (s: FormState<D>) => R): R;
export declare function useFormState<D extends Data>(): FormState<D>;
/**
 * Form dispatch action
 * enter formReducer action
 */
export declare function useFormDispatch<D extends Data = Data, A = FormAction<D>>(): (action: A) => void;
/**
 * Submit helper to trigger form Submit action
 * - TODO: think about passing callback - onSubmit
 */
export declare function useFormSubmit(): () => void;
/**
 * Helper for custom Submit button
 */
export declare function useSubmitButton(): [boolean, unknown];
