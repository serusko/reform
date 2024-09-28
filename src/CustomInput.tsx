interface Props {
  isChanged?: boolean;
  isDisabled?: boolean;
  setValue: (v: string | null) => void;
  value: string | null;
}

export default function CustomInput({ isDisabled, setValue, value, ...props }: Props) {
  return (
    <input
      {...props}
      disabled={!!isDisabled}
      value={value || ''}
      onChange={(e) => setValue(e.currentTarget.value || null)}
    />
  );
}
