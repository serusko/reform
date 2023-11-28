import type { ReactNode } from 'react';
import type { Data, FormState as FormStateType } from '../context';
interface Props<D extends Data> {
    children: ReactNode | ((s: FormStateType<D>) => ReactNode);
    condition?: (s: FormStateType<D>) => boolean;
}
/**
 * Conditionally render children content based on selector (must return truthy value)
 * TODO: double-check optimization - memoize child ? condition ?
 */
export default function FormState<D extends Data = Data>({ children, condition }: Props<D>): import("react/jsx-runtime").JSX.Element | null;
export {};
