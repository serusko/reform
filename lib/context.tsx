import { ReactNode } from 'react';
import { createContext } from 'use-context-selector';

import FormAction from './FormAction';
import FormState from './FormState';

export type Data = Record<string, unknown>;
export type FormErrors = Record<string, ReactNode>;
export type ValidationFn<D> = (data: D) => undefined | FormErrors;

export type { FormState, FormAction };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Schema = any;

// eslint-disable-next-line react-refresh/only-export-components
export const initialFormState: FormState<Data> = {
  changed: {},
  errors: {},
  initialValues: {},
  isValid: true,
  isValidating: false,
  lastAction: 'init',
  required: {},
  submitted: 0,
  touched: {},
  values: {} as Data,
};

// bcs var cannot be Generic
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FormStateContext = createContext<FormState<any>>(initialFormState);
/* istanbul ignore next */
export const FormActionContext = createContext<(action: FormAction) => void>(() => undefined);
