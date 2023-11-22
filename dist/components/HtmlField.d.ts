import { HTMLProps } from 'react';
type Type = {
    input: HTMLInputElement;
    select: HTMLSelectElement;
};
interface Props<T extends keyof Type> extends HTMLProps<HTMLInputElement> {
    component: T;
    name: string;
}
export default function HtmlField<T extends keyof Type>({ children, component, name }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
