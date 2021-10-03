import * as op from "object-path";
import { useCallback, useMemo } from "react";
import { useContext } from "use-context-selector";
import { useContextSelector } from "use-context-selector";

import { InputInterface, MetaInterface, FieldHelpers } from "./";

import {
  FormActionContext,
  FormStateContext,
  FormState,
  Data,
} from "./FormContext";

export function useField<V = any, D extends Data = Data>(
  name: string
): [InputInterface<V>, MetaInterface<V>, FieldHelpers<V>] {
  const selector = useCallback(
    ({
      initialTouched,
      disabledFields,
      initialErrors,
      initialValues,
      submitted,
      disabled,
      changed,
      touched,
      values,
      errors,
    }: FormState<D>) =>
      ({
        touched: submitted > 0 || !!touched[name],
        value: op.get(values, name),
        changed: !!changed[name],
        disabled:
          disabledFields && disabledFields[name]
            ? disabledFields[name]
            : !!disabled,
        error: submitted > 0 || !!touched[name] ? errors[name] : undefined,
        initialValue: initialValues ? initialValues[name] : undefined,
        initialError: initialErrors ? initialErrors[name] : undefined,
        initialTouched: initialTouched ? initialTouched[name] : false,
      } as const),
    [name]
  );

  // @ts-ignore
  const field = useContextSelector(FormStateContext, selector);
  const dispatch = useContext(FormActionContext);

  const setValue = useCallback(
    (value: any) => dispatch({ name, type: "onChange", value }),
    [dispatch, name]
  );

  const setTouched = useCallback(
    () => dispatch({ name, type: "setTouched" }),
    [dispatch, name]
  );

  const setError = useCallback(
    (error: string | undefined) => dispatch({ name, error, type: "setError" }),
    [dispatch, name]
  );

  const {
    initialTouched,
    initialValue,
    initialError,
    disabled,
    touched,
    changed,
    value,
    error,
  } = field;

  return useMemo(() => {
    return [
      {
        value,
        name,
        multiple: false,
        checked: false,
        onChange: () => undefined,
        onBlur: () => undefined,
        disabled,
      } as InputInterface<V>,
      {
        value,
        error: (error as string) || undefined,
        touched,
        changed,
        initialValue,
        initialTouched,
        initialError,
        disabled,
      } as MetaInterface<V>,
      {
        setValue,
        setTouched,
        setError,
      } as FieldHelpers<V>,
    ];
  }, [
    changed,
    error,
    initialError,
    initialTouched,
    initialValue,
    disabled,
    name,
    setError,
    setTouched,
    setValue,
    touched,
    value,
  ]);
}

export function useFieldValue<V = any>(name: string): V {
  return useContextSelector(FormStateContext, (v) => v.values[name]);
}
