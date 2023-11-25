import { FC, ReactNode, useMemo } from 'react';

import useArrayFieldLength from '../hooks/useArrayFieldLength';
import { FieldState } from '../renderers/FieldState';

/**
 * Track length of array value and render as many as array length
 * render only when length is changed
 * so you can put map function
 * if you need re-render on field change, use FieldArrayRenderer
 */
export const FieldArrayLength: FC<{
  name: string;
  /**
   *
   * @param {number} length - length of array
   * @param {Array<number>} arr - array of indexes with same length
   * @returns {ReactNode}
   */
  render: (length: number, arr: number[]) => ReactNode;
}> = ({ name, render }) => {
  const length = useArrayFieldLength(name);

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
    <FieldArrayLength
      name={name}
      render={(_, arr) =>
        arr.map((index) => (
          <FieldState key={`${name}.${index}`} name={`${name}.${index}`}>
            {(field) => render({ item: field.value, name: `${name}.${index}` })}
          </FieldState>
        ))
      }
    />
  );
};
