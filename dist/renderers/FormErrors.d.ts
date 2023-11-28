import type { ReactNode } from 'react';
import type { Data } from '../context';
/**
 * Access Form Errors from JSX
 */
export default function FormErrors<D = Data>({ children }: {
    children: (values: D) => ReactNode;
}): ReactNode;
