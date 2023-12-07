import { act, renderHook } from '@testing-library/react';

import useFormDispatch from './useFormDispatch';
import useSetFieldError from './useSetFieldError';

jest.mock('./useFormDispatch');

describe('useSetFieldError', () => {
  it('returns a function that dispatches a setError action', async () => {
    const mockDispatch = jest.fn();
    (useFormDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const { result } = renderHook(() => useSetFieldError('test'));

    await act(async () => {
      await result.current('error message');
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      error: 'error message',
      name: 'test',
      type: 'setError',
    });
  });

  it('handles promise errors', async () => {
    const mockDispatch = jest.fn();
    (useFormDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const { result } = renderHook(() => useSetFieldError('test'));

    await act(async () => {
      await result.current(Promise.resolve('promise error message'));
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      error: 'promise error message',
      name: 'test',
      type: 'setError',
    });
  });
});
