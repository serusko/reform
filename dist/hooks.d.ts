import { FormState, Data, FormAction } from './context';
/**
 * Form State context selector
 */
export declare function useSelect<D extends Data, V = unknown>(g: (s: FormState<D>) => V): V;
/**
 * Get field value, meta-info, actions for one field
 * - use dot chain for nested path
 */
export declare function useField<V = unknown>(name: string): {
    changed: boolean;
    disabled: boolean;
    error: string | undefined;
    initialValue: unknown;
    isRequired: boolean;
    name: string;
    onBlur: () => void;
    onChange: (value: unknown) => void;
    setError: (error: string | undefined) => void;
    setValue: (value: unknown) => void;
    touched: boolean;
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
export declare function useSetFieldError(name: string): (error: string | undefined) => void;
/**
 * Form dispatch action
 * enter formReducer action
 */
export declare function useFormDispatch<D extends Data = Data, A = FormAction<D>>(): (a: A) => void;
/**
 * Submit helper to trigger form Submit action
 */
export declare function useSubmit(): () => void;
export declare function useFormState<D extends Data>(): FormState<D>;
export declare function useFormSubmitting(): boolean[];
