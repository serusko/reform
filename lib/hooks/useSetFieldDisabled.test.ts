import { act, renderHook } from '@testing-library/react';

import useFormDispatch from './useFormDispatch';
import useSetFieldDisabled from './useSetFieldDisabled';

jest.mock('./useFormDispatch');

describe('useSetFieldDisabled', () => {
  it('returns a function that dispatches a setDisabled action', () => {
    const mockDispatch = jest.fn();
    (useFormDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const { result } = renderHook(() => useSetFieldDisabled('test'));

    act(() => {
      result.current(true);
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      name: 'test',
      type: 'setDisabled',
      value: true,
    });
  });
});
