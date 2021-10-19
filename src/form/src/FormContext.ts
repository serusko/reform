import { createContext } from "use-context-selector";
import * as Yup from "yup";

export type Data = Record<string, any>;

export interface FormState<D extends Data = Data> {
  changed: Record<string, boolean>;
  disabled?: boolean;
  disabledFields?: Record<string, boolean>;
  errors: Record<string, string>;
  isValid: boolean;
  isValidating: boolean;
  schema?: Yup.SchemaOf<D>;
  submitted: number;
  touched: Record<string, boolean>;
  values: D;
  initialErrors: Record<string, string>;
  initialValues?: Partial<D>;
  initialTouched?: Record<string, boolean>;
}

export type FormAction<D extends Data = Data> =
  | { type: "initialValues"; value: undefined | D }
  | { type: "onChange"; name: string; value: unknown }
  | { type: "setError"; name: string | string[]; error: undefined | string }
  | { type: "setErrors"; errors: Record<string, string> }
  | { type: "setTouched"; name: string | string[] }
  | { type: "onSubmit"; cb: (data: D) => void };

export const initialState = {
  changed: {},
  errors: {},
  isValid: true,
  isValidating: false,
  submitted: 0,
  touched: {},
  values: {},
  initialValues: {},
  initialErrors: {},
  initialTouched: {},
} as FormState<Data>;

export const FormStateContext = createContext<FormState>(initialState);
export const FormActionContext = createContext<(action: FormAction) => void>(
  () => undefined
);
