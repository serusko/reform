/**
 * Get field value, meta-info, actions for one field
 * - use dot chain for nested path
 */
export default function useField<V = unknown>(name: string): {
    error: any;
    initialValue: unknown;
    isChanged: boolean;
    isDisabled: boolean;
    isReadOnly: boolean | undefined;
    isRequired: any;
    isTouched: boolean;
    name: string;
    onChange: (value: unknown) => void;
    setError: (error: import("../components/BaseFieldProps").SetFieldErrorVal) => void;
    setTouched: (touched?: boolean) => void;
    setValue: (value: unknown) => void;
    value: V | null;
};
