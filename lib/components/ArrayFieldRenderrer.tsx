import { FC, ReactNode } from 'react';

import { FieldState } from '../renderers/FieldState';

import { FieldArrayLength } from './FieldArrayLength';

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
export const ArrayFieldRenderer: FC<ArrayFieldRendererProps> = ({
  name,
  render,
}: ArrayFieldRendererProps) => {
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
