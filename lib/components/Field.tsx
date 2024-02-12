import { ComponentType, ReactElement } from 'react';

import { Data } from '../context';
import useField from '../hooks/useField';

import type BaseFieldProps from './BaseFieldProps';
import FieldProps from './FieldProps';

/**
 * Generic wrapper "HoC" for connecting standard Field components with Form
 * TODO: find proper pattern name
 */
function Field<D extends Data, C extends ComponentType<BaseFieldProps>>({
  component,
  isDisabled,
  name,
  ...props
}: FieldProps<D, C>): ReactElement {
  const Component = component as FieldProps<D, C>['component'];

  const field = useField(name as string);

  const errorProps = {
    errorText: field.error,
  };

  return (
    // @ts-ignore TODO: ...
    <Component
      {...props}
      {...errorProps}
      {...field}
      disabled={isDisabled !== undefined ? isDisabled : field.isDisabled}
      required={props.isRequired !== undefined ? props.isRequired : field.isRequired}
    />
  );
}

export default Field;
