import { ComponentType, ReactElement } from 'react';
import { default as BaseFieldProps } from './BaseFieldProps';
import { default as FieldProps } from './FieldProps';
/**
 * Generic wrapper "HoC" for connecting standard Field components with Form
 * TODO: find proper pattern name
 */
declare function Field<C extends ComponentType<BaseFieldProps>>({ component, isDisabled, isRequired, name, ...props }: FieldProps<C>): ReactElement;
export default Field;
