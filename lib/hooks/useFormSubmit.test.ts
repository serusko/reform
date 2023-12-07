import { renderHook, act } from '@testing-library/react';

import useFormDispatch from './useFormDispatch';
import useFormSelect from './useFormSelect';
import useFormSubmit from './useFormSubmit';

jest.mock('./useFormDispatch');
jest.mock('./useFormSelect');

describe('useFormSubmit', () => {
  it('returns a tuple with submitting status, validating status, and dispatch submit function', () => {
    const mockDispatch = jest.fn();
    (useFormDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useFormSelect as jest.Mock).mockImplementation((selector) =>
      selector({ isSubmitting: true, isValidating: false }),
    );

    const { result } = renderHook(() => useFormSubmit());

    expect(result.current[0]).toBe(true);
    expect(result.current[1]).toBe(false);

    act(() => {
      result.current[2]();
    });

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'startSubmit' });
  });
});
