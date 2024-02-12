import { ComponentType, ReactElement } from 'react';
import { Data } from '../context';
import type BaseFieldProps from './BaseFieldProps';
import FieldProps from './FieldProps';
/**
 * Generic wrapper "HoC" for connecting standard Field components with Form
 * TODO: find proper pattern name
 */
declare function Field<D extends Data, C extends ComponentType<BaseFieldProps>>({ component, isDisabled, name, ...props }: FieldProps<D, C>): ReactElement;
export default Field;
