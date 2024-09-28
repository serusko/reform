import { ComponentType } from 'react';
import { default as BaseFieldProps } from './BaseFieldProps';
export type NestedKeyOf<T extends object> = {
  [Key in keyof T & (string | number)]: Exclude<T[Key], undefined> extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<Exclude<T[Key], undefined>>}`
    : `${Key}`;
}[keyof T & (string | number)];

/**
 * Field props, is set of generic props and have to require component specific props (if needed)
 * <Field component={CustomInput} ... /> extends CustomInput Props type
 */
type FieldProps<C extends ComponentType<BaseFieldProps>> = {
  component: C;
  isDisabled?: boolean;
  isRequired?: boolean;
  name: string;
} & Omit<ComponentProps<C>, 'value' | 'setValue'>;

export default FieldProps;
