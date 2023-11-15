import { ComponentProps, ComponentType, ReactElement } from 'react';

import { useField } from '../hooks';

// TODO: require
export interface BaseFieldProps<V = unknown> {
  disabled?: boolean;
  error?: string;
  onBlur?: () => void;
  onChange: (v: V | null) => void;
  required?: boolean;
  value: V | null;
}

type Props<C extends ComponentType<BaseFieldProps>> = {
  component: C;
  name: string; // TODO: make name union - keyof Data
} & Omit<ComponentProps<C>, 'value' | 'onChange'>;

/**
 * Generic wrapper "HoC" for connecting standard Field components with Form
 *
 * TODO: component type should have pool of required props (value, label, error...)
 * with this one we have type-check for usage,
 * so required fields for Dropdown
 * will be required for <Field component={Dropdown} ...options!...
 */
function Field<C extends ComponentType<BaseFieldProps>>({
  component,
  disabled,
  name,
  ...props
}: Props<C>): ReactElement {
  const Component: ComponentType<BaseFieldProps> = component;

  const field = useField(name as string);

  const errorProps = {
    errorText: field.error,
  };

  return (
    <Component
      {...props}
      {...errorProps}
      {...field}
      disabled={disabled !== undefined ? disabled : field.disabled}
      required={props.required !== undefined ? props.required : field.isRequired}
    />
  );
}

export default Field;
