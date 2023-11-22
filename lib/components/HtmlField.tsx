import { ComponentType, FC, HTMLProps, PropsWithChildren, useRef } from 'react';

import { useField } from '..';

type Type = {
  input: HTMLInputElement;
  select: HTMLSelectElement;
};

interface Props<T extends keyof Type> extends HTMLProps<HTMLInputElement> {
  component: T;
  name: string;
}

export default function HtmlField<T extends keyof Type>({ children, component, name }: Props<T>) {
  const C = component as unknown as Type[T];
  const { setValue, value } = useField<string>(name);

  const X = C as unknown as ComponentType<HTMLProps<T>>;

  return (
    <R>
      {/* @ts-ignore TODO: ... */}
      <X value={value || ''} onChange={(e) => setValue(e.target.value || null)}>
        {children}
      </X>
    </R>
  );
}

const R: FC<PropsWithChildren> = ({ children }) => {
  const x = useRef(0);

  return (
    <div style={{ display: 'inline-block', padding: '1rem', position: 'relative' }}>
      <span
        style={{
          alignItems: 'center',
          background: 'red',
          borderRadius: 10,
          color: '#fff',
          display: 'flex',
          fontSize: 12,
          height: 20,
          justifyContent: 'center',
          left: 0,
          position: 'absolute',
          top: -5,
          width: 20,
        }}
      >
        {x.current++}
      </span>
      {children}
    </div>
  );
};
