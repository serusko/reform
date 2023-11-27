import { renderHook } from '@testing-library/react';
import { FC, PropsWithChildren } from 'react';

import Form from './components/Form';
import { initialFormState } from './context';
import useFormState from './hooks/useFormState';

describe('Default State Context', () => {
  it('Initializes with proper default values', () => {
    const wrapper: FC<PropsWithChildren> = ({ children }) => <Form>{children}</Form>;
    const hook = renderHook(() => useFormState(), { wrapper });

    expect(hook.result.current).toMatchObject(initialFormState);
  });
});
