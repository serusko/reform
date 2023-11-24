import { FC, PropsWithChildren, useEffect, useRef } from 'react';

const RenderCount: FC<PropsWithChildren> = ({ children }) => {
  // @ts-ignore TODO: ...
  const x = useRef(import.meta.env.MODE === 'development' ? -1 : 0); // Strict mode adds +1 when using effect

  useEffect(() => {
    x.current++;
  });

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <span
        style={{
          alignItems: 'center',
          background: 'purple',
          borderRadius: 10,
          color: '#fff',
          display: 'flex',
          fontSize: 12,
          height: 20,
          justifyContent: 'center',
          left: -10,
          opacity: 0.4,
          position: 'absolute',
          top: -10,
          width: 20,
        }}
      >
        {Math.max(0, x.current)}
      </span>
      {children}
    </div>
  );
};

export default RenderCount;
