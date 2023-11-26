import {
  ComponentType,
  FormEventHandler,
  HTMLProps,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';

import useField from '../hooks/useField';

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
export default function HtmlField<T extends keyof Type>({
  children,
  component,
  label,
  name,
  required,
  type,
  value,
  ...props
}: Props<T>) {
  const C = component as unknown as ComponentType<HTMLProps<T>>;
  const {
    error,
    isDisabled,
    isReadOnly,
    isRequired,
    setTouched,
    setValue,
    value: inputValue,
  } = useField<string>(name);

  const htmlId = useMemo(() => `${component}-${name}-${Math.random()}`, [name, component]);
  const isCheckOrRadio = ['radio', 'checkbox'].includes(type || '');

  const handleChange = useCallback(
    (e: FormEventHandler<T>) => {
      if (!isReadOnly) {
        setValue(
          // @ts-ignore TODO: improve
          isCheckOrRadio ? (inputValue === value ? null : value) : e.currentTarget?.value || null,
        );
      }
    },
    [inputValue, isCheckOrRadio, isReadOnly, setValue, value],
  );

  const inputRef = useRef<HTMLInputElement>();

  // TODO: elaborate more this solution
  useEffect(() => {
    if (inputRef.current) {
      if (error && typeof error === 'string') {
        inputRef.current.setCustomValidity(error);
        inputRef.current.reportValidity();
      } else {
        inputRef.current.setCustomValidity('');
      }
    }
  });

  const input = (
    <C
      {...props}
      // @ts-ignore TODO: resolve typings
      ref={inputRef}
      checked={isCheckOrRadio ? inputValue === value : undefined}
      disabled={isDisabled}
      id={htmlId}
      readOnly={isReadOnly}
      required={typeof required === 'boolean' ? required : isRequired}
      type={type}
      value={isCheckOrRadio ? value : inputValue || ''}
      onBlur={() => setTouched(true)}
      // @ts-ignore TODO: improve type
      onChange={handleChange}
    >
      {children}
    </C>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
      {component === 'input' && type && isCheckOrRadio ? (
        <>
          <label style={{ display: 'flex', flexDirection: 'row', gap: '0.25rem' }}>
            {input}
            {label && (
              <span>
                {label}
                {isRequired ? ' *' : null}
              </span>
            )}
          </label>
        </>
      ) : (
        <>
          {label && (
            <label htmlFor={htmlId}>
              {label}
              {isRequired ? ' *' : null}
            </label>
          )}
          {input}
        </>
      )}
    </div>
  );
}
