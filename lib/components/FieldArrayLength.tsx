import { FC, ReactNode, useMemo } from 'react';

import useArrayFieldLength from '../hooks/useArrayFieldLength';

interface Props {
  name: string;
  /**
   *
   * @param {number} length - length of array
   * @param {Array<number>} arr - array of indexes with same length
   * @returns {ReactNode}
   */
  render: (length: number, arr: number[]) => ReactNode;
}

/**
 * Track length of array value and render as many as array length
 * render only when length is changed
 * so you can put map function
 * if you need re-render on field change, use FieldArrayRenderer
 */
export const FieldArrayLength: FC<Props> = ({ name, render }) => {
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
