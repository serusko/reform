import { ReactNode } from 'react';
import { useField } from './hooks';
interface Props<T = unknown> {
    children: (field: ReturnType<typeof useField<T>>) => ReactNode;
    name: string;
}
/**
 * Track Form Field state via JSX Render function
 */
declare function FieldConsumer<V = unknown>({ children, name }: Props<V>): import("react/jsx-runtime").JSX.Element;
export default FieldConsumer;
