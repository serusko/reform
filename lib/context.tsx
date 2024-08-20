import type { ReactNode } from 'react';
import { createContext } from 'use-context-selector';

import type FormAction from './FormAction';
import type FormState from './FormState';

export type Data = Record<string, unknown>;
export type FormErrors = Record<string, ReactNode>;
/**
 * Returns undefined if no errors occurred,
 * allowing for a quick check of validity.
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
    validatingFields: {},
    submitted: 0,
    touched: {},
    values: {} as D,
    ...(ini || {}),
  };
}

// bcs var cannot be Generic
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FormStateContext = createContext<FormState<any>>(getInitialFormState<any>());
/* istanbul ignore next */
export const FormActionContext = createContext<(action: FormAction) => void>(() => undefined);
