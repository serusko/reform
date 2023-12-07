import FormState from '../FormState';

import useArrayFieldLength from './useArrayFieldLength';
import useFormSelect from './useFormSelect';

jest.mock('./useFormSelect');

describe('useArrayFieldLength', () => {
  it('calls useFormSelect with the correct selector function', () => {
    const mockUseFormSelect = useFormSelect as jest.MockedFunction<typeof useFormSelect>;
    const mockName = 'test';
    const mockState = { values: { [mockName]: ['item1', 'item2', 'item3'] } } as FormState;

    useArrayFieldLength(mockName);

    expect(mockUseFormSelect).toHaveBeenCalled();
    const selector = mockUseFormSelect.mock.calls[0][0];
    expect(selector(mockState)).toBe(3);
  });

  it('returns 0 if the field is not an array', () => {
    const mockUseFormSelect = useFormSelect as jest.MockedFunction<typeof useFormSelect>;
    const mockName = 'test';
    const mockState = { values: { [mockName]: 'not an array' } } as FormState;

    useArrayFieldLength(mockName);

    expect(mockUseFormSelect).toHaveBeenCalled();
    const selector = mockUseFormSelect.mock.calls[0][0];
    expect(selector(mockState)).toBe(0);
  });
});
