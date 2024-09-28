import Form from './components/Form';
import useArrayFieldLength from './hooks/useArrayFieldLength';
import useField from './hooks/useField';
import useFieldError from './hooks/useFieldError';
import useFieldInitialValue from './hooks/useFieldInitialValue';
import useFieldIsChanged from './hooks/useFieldIsChanged';
import useFieldIsDisabled from './hooks/useFieldIsDisabled';
import useFieldIsRequired from './hooks/useFieldIsRequired';
import useFieldTouched from './hooks/useFieldTouched';
import useFieldValue from './hooks/useFieldValue';
import useFormDispatch from './hooks/useFormDispatch';
import useFormSelect from './hooks/useFormSelect';
import useFormState from './hooks/useFormState';
import useFormSubmit from './hooks/useFormSubmit';
import useSetFieldDisabled from './hooks/useSetFieldDisabled';
import useSetFieldError from './hooks/useSetFieldError';
import useSetFieldTouched from './hooks/useSetFieldTouched';
import useSetFieldValue from './hooks/useSetFieldValue';
import useSetValues from './hooks/useSetValues';

export {
  useArrayFieldLength,
  useFieldIsChanged,
  useFieldIsRequired,
  useFieldTouched,
  useFormDispatch,
  useFormSubmit,
  useSetFieldTouched,
  useFieldError,
  useFieldIsDisabled,
  useField,
  useFormSelect,
  useSetFieldDisabled,
  useSetFieldValue,
  useFieldInitialValue,
  useFieldValue,
  useFormState,
  useSetFieldError,
  useSetValues,
};

export default Form;

export { getDefaultFormReducer } from './formReducer';
