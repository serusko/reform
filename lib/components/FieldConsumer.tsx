import { ReactNode } from 'react';

import { useField } from '../hooks';

interface Props<T = unknown> {
  children: (field: ReturnType<typeof useField<T>>) => ReactNode;
  name: string;
}

/**
 * Track Form Field state via JSX Render function
 */
function FieldConsumer<V = unknown>({ children, name }: Props<V>) {
  const field = useField<V>(name);

  return <>{children(field)}</>;
}

export default FieldConsumer;
