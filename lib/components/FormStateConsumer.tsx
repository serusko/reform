import { ReactNode } from 'react';

import { useFormState, type Data, type FormState } from '..';

export function FormStateConsumer<D extends Data = Data>({
  children,
}: {
  children?: (s: FormState<D>) => ReactNode;
}) {
  const s = useFormState<D>();

  return <>{children ? children(s) || null : null}</>;
}
