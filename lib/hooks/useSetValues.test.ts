import { act, renderHook } from '@testing-library/react';

import useFormDispatch from './useFormDispatch';
import useSetValues from './useSetValues';

jest.mock('./useFormDispatch');

describe('useSetValues', () => {
  it('returns a function that dispatches a setValues action', () => {
    const mockDispatch = jest.fn();
    (useFormDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const { result } = renderHook(() => useSetValues());

    act(() => {
      result.current({ field: 'value' });
    });

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'setValues', values: { field: 'value' } });
  });
});
