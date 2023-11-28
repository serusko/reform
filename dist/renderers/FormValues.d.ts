import type { ReactNode } from 'react';
import type { Data } from '../context';
/**
 * Access Form Values from JSX
 */
export default function FormValues<D = Data>({ children }: {
    children: (values: D) => ReactNode;
}): ReactNode;
