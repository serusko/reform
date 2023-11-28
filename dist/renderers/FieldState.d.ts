import type { ReactNode } from 'react';
import useField from '../hooks/useField';
interface Props<T = unknown> {
    children: (field: ReturnType<typeof useField<T>>) => ReactNode;
    name: string;
}
/**
 * Track Form Field state via JSX render function
 * TODO: Test memoizing optimization - children
 */
export declare function FieldState<V = unknown>({ children, name }: Props<V>): import("react/jsx-runtime").JSX.Element;
export {};
