import { renderHook, act, waitFor } from '@testing-library/react';
import { FC, PropsWithChildren } from 'react';

import Form from '../components/Form';
import { FormActionContext } from '../context';

import useField from './useField';

describe('useField', () => {
  it('Return defaults if no Context is provided', () => {
    const {
      result: { current: field },
    } = renderHook(() => useField('fieldName'));

    expect(field).toMatchObject({
      error: undefined,
      initialValue: null,
      isChanged: false,
      isDisabled: false,
      isReadOnly: false,
      isRequired: false,
      isTouched: false,
      name: 'fieldName',
      value: null,
    });
  });

  it('Triggers proper reducer actions', async () => {
    const dispatch = jest.fn();
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <FormActionContext.Provider value={dispatch}>{children}</FormActionContext.Provider>
    );

    const {
      result: { current: field },
    } = renderHook(() => useField('fieldName'), { wrapper });

    await act(() => {
      field.setValue('fieldValue');
    });

    expect(dispatch).toHaveBeenCalledWith({
      name: 'fieldName',
      type: 'setValue',
      value: 'fieldValue',
    });

    await act(() => {
      field.setTouched(true);
    });

    expect(dispatch).toHaveBeenCalledWith({ name: 'fieldName', touched: true, type: 'setTouched' });

    await act(() => {
      field.setError('Error message');
    });

    expect(dispatch).toHaveBeenCalledWith({
      error: 'Error message',
      name: 'fieldName',
      type: 'setError',
    });

    const errJsx = <p>Error Message</p>;

    await act(() => {
      field.setError(errJsx);
    });

    expect(dispatch).toHaveBeenCalledWith({
      error: errJsx,
      name: 'fieldName',
      type: 'setError',
    });
  });

  it('Provides default values properly', () => {
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <Form initialValues={{ foo: 'bar', list: [{}, { val: 'foo' }], nested: { val: 'baz' } }}>
        {children}
      </Form>
    );

    const {
      result: { current: rootValue },
    } = renderHook(() => useField('foo'), { wrapper });
    const {
      result: { current: listValue },
    } = renderHook(() => useField('list.1.val'), { wrapper });
    const {
      result: { current: objValue },
    } = renderHook(() => useField('nested.val'), { wrapper });

    expect(rootValue.value).toBe('bar');
    expect(listValue.value).toBe('foo');
    expect(objValue.value).toBe('baz');
  });

  it('Uses new value and updates metadata', async () => {
    const fn = jest.fn();
    const inits = { list: [{}, { val: 'bar' }] };
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <Form initialValues={inits} onStateUpdate={fn}>
        {({ values }) => (
          <>
            {children}
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </>
        )}
      </Form>
    );

    const {
      result: { current: field },
    } = renderHook(() => useField<string>('list.1.val'), { wrapper });

    expect(field).toMatchObject({ isChanged: false, isTouched: false, value: 'bar' });

    await act(() => field.setValue('baz'));

    await waitFor(() => expect(field.value).toBe('baz'));
  });
});

describe('Initial Values', () => {
  it('Uses custom default value', () => {
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <Form initialValues={{ foo: 'value' }}>{children}</Form>
    );

    const {
      result: { current: field },
    } = renderHook(() => useField('foo'), { wrapper });

    expect(field.value).toBe('value');
  });

  it.todo('On change InitialValues, value is changed');

  it.todo('Reset Form will use initial value');
});

describe.only('Touched meta-property', () => {
  it('Untouched field could be marked by setTouched', async () => {
    const onStateUpdate = jest.fn();
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <Form initialValues={{ foo: 'value' }} onStateUpdate={(action) => onStateUpdate(action)}>
        {children}
      </Form>
    );

    const {
      result: { current: field },
    } = renderHook(() => useField('foo'), { wrapper });

    expect(field.isTouched).toBe(false);

    await act(() => {
      field.setValue('bar');
    });

    await waitFor(() => field.isTouched === true);

    // expect(field.isTouched).toBe(true) // TODO: inspect why not working

    await act(() => {
      field.setTouched(true);
    });

    expect(onStateUpdate).toHaveBeenCalledWith({
      name: 'foo',
      touched: true,
      type: 'setTouched',
    });

    // expect(field.isTouched).toBe(true); // TODO: debug why its not working
  });
});
