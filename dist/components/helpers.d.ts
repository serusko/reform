import { FC, ReactNode } from 'react';
import { Data, FormState } from '../context';
/**
 * Track length of array value and render as many as array length
 * render only when length is changed
 * so you can put map function
 * if you need re-render on field change, use FieldArrayRenderer
 */
export declare const FieldArrayLength: FC<{
    name: string;
    /**
     *
     * @param {number} length - length of array
     * @param {Array<number>} arr - array of indexes with same length
     * @returns {ReactNode}
     */
    render: (length: number, arr: number[]) => ReactNode;
}>;
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
    render: (props: {
        item: I;
        name: string;
    }) => ReactNode;
}
/**
 * Render items of form field array
 * inspired by react-native FlatList
 * - render array of elements based on index, each item should be
 */
export declare const ArrayFieldRenderer: FC<ArrayFieldRendererProps>;
/**
 * Make available complete form state from JSX
 */
export declare function FormState<D extends Data = Data>({ children, }: {
    children?: (s: FormState<D>) => ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export {};
