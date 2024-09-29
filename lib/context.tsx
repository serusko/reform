import type { ReactNode } from 'react';
import { createContext } from 'use-context-selector';

import type FormAction from './FormAction';
import type FormState from './FormState';

export type Data = Record<string, unknown>;
export type FormErrors = Record<string, ReactNode>;
/**
 * Return undefined if nor errors occurred
 * so its fastest check if everything is valid
 */
export type ValidationFn<D> = (data: D) => undefined | FormErrors;

export type { FormState, FormAction };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Schema = any;

// eslint-disable-next-line react-refresh/only-export-components
export function getInitialFormState<D extends Data>(ini?: Partial<FormState<D>>): FormState<D> {
  return {
    disabled: false,
    disabledFields: {},
    errors: undefined,
    initialValues: {} as D,
    required: {},
    submitted: 0,
    touched: {},
    validatingFields: {},
    values: {} as D,
    ...(ini || {}),
  };
}

// bcs var cannot be Generic
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FormStateContext = createContext<FormState<any>>(getInitialFormState<any>());
/* istanbul ignore next */
export const FormActionContext = createContext<(action: FormAction) => void>(() => undefined);
