import { Data } from './context';
import { Props } from './props';
declare const Form: <D extends Data = Data>({ children, className, disabled, disabledFields, id, initialValues, onSubmit, reducer, validation, }: Props<D>) => import("react/jsx-runtime").JSX.Element;
export default Form;
