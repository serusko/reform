import { ReactNode } from 'react';
import { Data, FormAction } from './context';
interface Props<D extends Data = Data, A = FormAction<D>> {
    children: (dispatch: (action: A) => void) => ReactNode;
}
declare function FormDispatchConsumer<D extends Data = Data, A = FormAction<D>>({ children }: Props<D, A>): import("react/jsx-runtime").JSX.Element;
export default FormDispatchConsumer;
