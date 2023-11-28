import type { ReactNode } from 'react';
interface Props<V> {
    children: (value: V | null) => ReactNode;
    name: string;
}
/**
 * Access Field Value from JSX
 */
export default function FieldValue<V = unknown>({ children, name }: Props<V>): ReactNode;
export {};
