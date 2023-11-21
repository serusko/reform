import { FC, PropsWithChildren, ReactNode } from 'react';
import { Data, FormAction, FormState } from '..';
import { useField } from '../hooks';
interface FieldConsumerProps<T = unknown> {
    children: (field: ReturnType<typeof useField<T>>) => ReactNode;
    name: string;
}
/**
 * Track Form Field state via JSX render function
 * TODO: Test memoizing optimization - children
 */
export declare function FieldConsumer<V = unknown>({ children, name }: FieldConsumerProps<V>): import("react/jsx-runtime").JSX.Element;
/**
 * Track Form Field value via JSX render function
 * TODO: Test memoizing optimization - children, value, name
 */
export declare function FieldValueConsumer<V = unknown>({ children, name }: FieldConsumerProps<V>): import("react/jsx-runtime").JSX.Element;
/**
 * Track length of array value and render as many as array length
 * render only when length is changed
 * so you can put map function
 * if you need re-render on field change, use FieldArrayRenderer
 */
export declare const FieldArrayLengthConsumer: FC<{
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
export declare function FormStateConsumer<D extends Data = Data>({ children, }: {
    children?: (s: FormState<D>) => ReactNode;
}): import("react/jsx-runtime").JSX.Element;
interface FormDispatchConsumerProps<D extends Data = Data, A = FormAction<D>> {
    children: (dispatch: (action: A) => void) => ReactNode;
}
/**
 * Make available dispatch action from JSX
 */
export declare function FormDispatchConsumer<D extends Data = Data, A = FormAction<D>>({ children, }: FormDispatchConsumerProps<D, A>): import("react/jsx-runtime").JSX.Element;
interface FormRenderProps<D extends Data> extends PropsWithChildren {
    condition: (s: FormState<D>) => boolean;
}
/**
 * Conditionally render children content based on selector (must return truthy value)
 * TODO: double-check optimization - memoize child ? condition ?
 */
export declare const FormStateRender: <D extends Data = Data>({ children, condition, }: FormRenderProps<D>) => import("react/jsx-runtime").JSX.Element | null;
export {};
