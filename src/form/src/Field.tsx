import { FC, ComponentType, useMemo, memo } from "react";

import { useField } from "./useField";

export interface FieldProps extends Record<string, any> {
  component: ComponentType<any>;
  name: string;
}

export const Field: FC<FieldProps> = memo((props) => {
  const f = useField(props.name);
  const C = props.component;

  const [{ value, disabled }, { error }, { setValue, setTouched }] = f;

  return useMemo(() => {
    return (
      <C
        {...props}
        helperText={error || props.helperText}
        onBlur={setTouched}
        disabled={disabled}
        onChange={setValue}
        name={props.name}
        error={!!error}
        value={value}
      />
    );
  }, [C, disabled, error, props, setTouched, setValue, value]);
});
