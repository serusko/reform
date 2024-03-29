import type { ReactNode } from 'react';
import type FormAction from './FormAction';
import type FormState from './FormState';
export type Data = Record<string, unknown>;
export type FormErrors = Record<string, ReactNode>;
export type ValidationFn<D> = (data: D) => undefined | FormErrors;
export type { FormState, FormAction };
export type Schema = any;
export declare const initialFormState: FormState<Data>;
export declare const FormStateContext: import("use-context-selector").Context<FormState<any>>;
export declare const FormActionContext: import("use-context-selector").Context<(action: FormAction) => void>;
