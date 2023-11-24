import { PropsWithChildren } from 'react';
import { Data, FormState } from '../context';
interface FormRenderProps<D extends Data> extends PropsWithChildren {
    condition: (s: FormState<D>) => boolean;
}
/**
 * Conditionally render children content based on selector (must return truthy value)
 * TODO: double-check optimization - memoize child ? condition ?
 */
export declare const FormStateRender: <D extends Data = Data>({ children, condition, }: FormRenderProps<D>) => import("react/jsx-runtime").JSX.Element | null;
export {};
