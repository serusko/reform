import { PropsWithChildren } from 'react';
import { Data, FormState } from './context';
interface Props<D extends Data> extends PropsWithChildren {
    condition: (s: FormState<D>) => boolean;
}
declare const FormRender: <D extends Data = Data>({ children, condition }: Props<D>) => import("react/jsx-runtime").JSX.Element | null;
export default FormRender;
