import type { ReactNode } from 'react';
import type { Data, FormAction } from '../context';
interface FormDispatchConsumerProps<D extends Data = Data, A = FormAction<D>> {
    children: (dispatch: (action: A) => void) => ReactNode;
}
/**
 * Make available dispatch action from JSX
 */
export declare function FormDispatch<D extends Data = Data, A extends FormAction<D> = FormAction<D>>({ children, }: FormDispatchConsumerProps<D, A>): import("react/jsx-runtime").JSX.Element;
export {};
