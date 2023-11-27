/// <reference types="react" />
/**
 * Get field value, meta-info, actions for one field
 * - use dot chain for nested path
 */
export default function useField<V = unknown>(name: string): {
    error: import("react").ReactNode;
    initialValue: any;
    isChanged: boolean;
    isDisabled: boolean;
    isReadOnly: boolean;
    isRequired: boolean;
    isTouched: boolean;
    name: string;
    onChange: (value: V) => void;
    setError: (error: import("../components/BaseFieldProps").SetFieldErrorVal) => void;
    setTouched: (touched?: boolean) => void;
    setValue: (value: V) => void;
    value: V | null;
};
