import { Data } from '../context';
import type FormProps from './FormProps';
declare const Form: <D extends Data = Data>({ children, className, disabled, disabledFields, id, initialValues, onStateUpdate, onSubmit, reducer, validation, }: FormProps<D>) => import("react/jsx-runtime").JSX.Element;
export default Form;
