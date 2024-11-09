import { ReactNode } from 'react';
import { NestedKeyOf } from '../components/FieldProps';
import { Data } from '../context';
/**
 * Get specific field 'error' meta info
 * - use dot chain for nested path
 */
export default function useFieldError<D extends Data = Data>(name: NestedKeyOf<D>): ReactNode | undefined;
