import { ReactNode } from 'react';
import { default as FormAction } from './FormAction';
import { default as FormState } from './FormState';
export type Data = Record<string, unknown>;
export type FormErrors = Record<string, ReactNode>;
/**
 * Return undefined if nor errors occurred
 * so its fastest check if everything is valid
 */
export type ValidationFn<D> = (data: D) => undefined | FormErrors;
export type { FormState, FormAction };
export type Schema = any;
export declare function getInitialFormState<D extends Data>(ini?: Partial<FormState<D>>): FormState<D>;
export declare const FormStateContext: import('use-context-selector').Context<FormState<any>>;
export declare const FormActionContext: import('use-context-selector').Context<(action: FormAction) => void>;
