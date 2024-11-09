import { Data } from '../context';
import { default as FormProps } from './FormProps';
declare const Form: <D extends Data = Data>({ children, disabled, getRequired, id, initialValues, onStateUpdate, onSubmit, reducer, validation, }: FormProps<D>) => import("react/jsx-runtime").JSX.Element;
export default Form;
