import { HTMLProps } from 'react';
type Type = {
    button: HTMLButtonElement;
    input: HTMLInputElement;
    select: HTMLSelectElement;
    textarea: HTMLTextAreaElement;
};
interface Props<T extends keyof Type> extends HTMLProps<HTMLInputElement> {
    component?: T;
    name: string;
}
/**
 * Render basic HTML tags
 */
export default function HtmlField<T extends keyof Type>({ children, component, label, name, required, type, value, ...props }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
