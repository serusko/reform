import { ReactNode } from 'react';
/** Base field data */
interface FieldData<V = unknown> {
  /** Initial Form state value */
  initialValue: V | null;
  /** Current Form state value */
  value: V | null;
}

/** MEtadata around UX */
interface FieldMeta<V = unknown> {
  /** Validation message */
  error?: ReactNode;
  /** Initial value */
  initialValue?: V | null;
  /** Indicate weather current value !== initialValue */
  isChanged: boolean;
  /** ReadOnly mode */
  isDisabled: boolean;
  /** Required value (e.g. display *) */
  isRequired: boolean;
  /** Was field touched by user Interaction? */
  isTouched: boolean;
  /** field name */
  name: string;
}

type Err = undefined | ReactNode;

/**
 * Field Error
 * Bcs values could be nested object, we can set multiple errors for one path name
 * and they will be spread into flat keys
 * TODO: enable more nested levels which will be flatten
 */
type SetFieldErrorVal = undefined | Err | Record<string, Err | Record<string, Err>>;

interface FieldActions<V = unknown> {
  /** Clear field value - use null */
  clearValue: () => void;
  /** Use value from initial state */
  resetValue: () => void;
  /** Change disabled state for specific field */
  setDisabled: (disabled: boolean) => void;
  /** Set validation from field, so field can set error or add Promise with result of validation */
  setError: (error: SetFieldErrorVal | Promise<SetFieldErrorVal>) => void;
  /** Mark field as "touched" by user interaction */
  setTouched: (touched: boolean = true) => void;
  /** Set field value */
  setValue: (v: V | null) => void;
}

/** Common props as minimal field API interface */
export default interface BaseFieldProps<V = unknown>
  extends FieldMeta,
    FieldData<V>,
    FieldActions<V> {
  name: string;
}
