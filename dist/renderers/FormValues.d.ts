import { ReactNode } from 'react';
import { Data } from '../context';
/**
 * Access Form Values from JSX
 */
export default function FormValues<D = Data>({ children }: {
    children: (values: D) => ReactNode;
}): ReactNode;
