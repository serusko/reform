import { createContext } from 'react';
import type { ReactNode } from 'react';

import type FormAction from './FormAction';
import type FormState from './FormState';

export type Data = Record<string, unknown>;
export type FormErrors = Record<string, ReactNode>;
export type ValidationFn<D> = (data: D) => undefined | FormErrors;

export type { FormState, FormAction };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Schema = any;

// eslint-disable-next-line react-refresh/only-export-components
export const initialFormState: FormState<Data> = {
  errors: {},
  initialValues: {},
  isValid: true,
  isValidating: false,
  isValidatingFields: {},
  lastAction: 'init',
  required: {},
  submitted: 0,
  touched: {},
  values: {} as Data,
};

type Subscriber<D extends Data> = (state: FormState<D>) => void;

export class FormStateSub<D extends Data = Data> {
  private state: FormState<D>;
  private subscribers: Subscriber<D>[] = [];

  constructor(initialState: FormState<D>) {
    this.state = initialState;
  }

  getState(): FormState<D> {
    return this.state;
  }

  setState(newState: FormState<D>): void {
    this.state = newState;
    this.notifySubscribers();
  }

  subscribe(subscriber: Subscriber<D>): void {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: Subscriber<D>): void {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }

  private notifySubscribers(): void {
    for (const subscriber of this.subscribers) {
      subscriber(this.getState());
    }
  }
}

// bcs var cannot be Generic
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FormStateContext = createContext<FormStateSub<any>>(
  new FormStateSub(initialFormState),
);
export const FormActionContext = createContext<(action: FormAction) => void>(() => undefined);
