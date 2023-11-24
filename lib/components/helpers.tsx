import { get } from 'object-path';
import { FC, PropsWithChildren, ReactNode, useMemo } from 'react';

import { Data, FormAction, FormState } from '..';
import { useField, useFieldValue, useFormDispatch, useFormSelect, useFormState } from '../hooks';

interface FieldConsumerProps<T = unknown> {
  children: (field: ReturnType<typeof useField<T>>) => ReactNode;
  name: string;
}

/**
 * Track Form Field state via JSX render function
 * TODO: Test memoizing optimization - children
 */
export function FieldConsumer<V = unknown>({ children, name }: FieldConsumerProps<V>) {
  const field = useField<V>(name);

  return <>{children(field)}</>;
}

/**
 * Track Form Field value via JSX render function
 * TODO: Test memoizing optimization - children, value, name
 */
export function FieldValueConsumer<V = unknown>({ children, name }: FieldConsumerProps<V>) {
  const value = useFormSelect((s) => get(s.values, name));

  return useMemo(() => <>{children(value)}</>, [children, value]);
}

/**
 * Track length of array value and render as many as array length
 * render only when length is changed
 * so you can put map function
 * if you need re-render on field change, use FieldArrayRenderer
 */
export const FieldArrayLengthConsumer: FC<{
  name: string;
  /**
   *
   * @param {number} length - length of array
   * @param {Array<number>} arr - array of indexes with same length
   * @returns {ReactNode}
   */
  render: (length: number, arr: number[]) => ReactNode;
}> = ({ name, render }) => {
  const length = useFormSelect((s) => {
    const value = get(s.values, name);
    return (value && Array.isArray(value) ? value : []).length;
  });

  return useMemo(
    () =>
      render(
        length,
        Array.from(Array(length)).map((_, i) => i),
      ),
    [length, render],
  );
};

interface ArrayFieldRendererProps<I = unknown> {
  item: I;
  /**
   * Extract unique React array-item key
   */
  keyExtractor?: (item: I) => number | string;
  /**
   * Field pathName
   */
  name: string;
  /**
   * Render function of specific component
   * @param props
   * @returns
   */
  render: (props: { item: I; name: string }) => ReactNode;
}

/**
 * Render items of form field array
 * inspired by react-native FlatList
 * - render array of elements based on index, each item should be
 */
export const ArrayFieldRenderer: FC<ArrayFieldRendererProps> = ({ name, render }) => {
  return (
    <FieldArrayLengthConsumer
      name={name}
      render={(_, arr) =>
        arr.map((index) => (
          <FieldConsumer key={`${name}.${index}`} name={`${name}.${index}`}>
            {(field) => render({ item: field.value, name: `${name}.${index}` })}
          </FieldConsumer>
        ))
      }
    />
  );
};

/**
 * Make available complete form state from JSX
 */
export function FormStateConsumer<D extends Data = Data>({
  children,
}: {
  children?: (s: FormState<D>) => ReactNode;
}) {
  const s = useFormState<D>();

  return <>{children ? children(s) || null : null}</>;
}

interface FormDispatchConsumerProps<D extends Data = Data, A = FormAction<D>> {
  children: (dispatch: (action: A) => void) => ReactNode;
}

/**
 * Make available dispatch action from JSX
 */
export function FormDispatchConsumer<D extends Data = Data, A = FormAction<D>>({
  children,
}: FormDispatchConsumerProps<D, A>) {
  const dispatch = useFormDispatch<D, A>();

  return <>{children(dispatch)}</>;
}

interface FormRenderProps<D extends Data> extends PropsWithChildren {
  condition: (s: FormState<D>) => boolean;
}

/**
 * Conditionally render children content based on selector (must return truthy value)
 * TODO: double-check optimization - memoize child ? condition ?
 */
export const FormStateRender = <D extends Data = Data>({
  children,
  condition,
}: FormRenderProps<D>) => {
  const render = useFormSelect(condition);

  if (render) {
    return <>{children}</>;
  }

  return null;
};

export function FieldValue<V = unknown>({
  children,
  name,
}: {
  children: (value: V | null) => ReactNode;
  name: string;
}) {
  const v = useFieldValue<V>(name);
  return children(v);
}

export function FormValues<D = Data>({ children }: { children: (values: D) => ReactNode }) {
  const values = useFormSelect((s) => s.values as D);
  return children(values);
}
