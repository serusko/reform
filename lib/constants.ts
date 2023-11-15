import { Data, FormState } from '.';

export const initialFormState: FormState<Data> = {
  changed: {},
  errors: {},
  initialErrors: {},
  initialTouched: {},
  initialValues: {},
  isValid: true,
  lastAction: 'init',
  submitted: 0,
  touched: {},
  values: {} as Data,
};
