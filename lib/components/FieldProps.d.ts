import type { ComponentProps, ComponentType } from 'react';

import type BaseFieldProps from './BaseFieldProps';

/**
 * Field props, is set of generic props and have to require component specific props (if needed)
 * <Field component={CustomInput} ... /> extends CustomInput Props type
 */
type FieldProps<C extends ComponentType<BaseFieldProps>> = {
  component: C;
  name: string; // TODO: once its possible, use valid nested pats only
} & Omit<ComponentProps<C>, 'value' | 'onChange'>;

export default FieldProps;
