import { FC, memo, useEffect, useMemo, useRef } from "react";

import { Form } from "./form/src/Form";
import { Field } from "./form/src/Field";
import { useField } from "./form/src/useField";

const TextInput: FC<any> = ({ id, label, onChange, onBlur, value }) => {
  const count = useRef(0);
  useEffect(() => {
    count.current++;
  });

  return (
    <>
      <label htmlFor={id}>
        {label} ({count.current}):
      </label>
      <br />
      <input
        onChange={(e) => onChange(e.currentTarget.value || "")}
        value={value || ""}
        onBlur={onBlur}
        autoComplete="off"
        id={id}
      />
    </>
  );
};

const Watch: FC<{ name: string }> = memo(({ name }) => {
  const field = useField(name);

  const count = useRef(0);
  useEffect(() => {
    count.current++;
  });

  return useMemo(
    () => (
      <div>
        {name} ({count.current}):
        <br />
        <pre>{JSON.stringify(field, null, 2)}</pre>
      </div>
    ),
    [field, name]
  );
});

function App() {
  return (
    <Form initialValues={{ name: "Foo" }}>
      <>
        <Field component={TextInput} name="name" id="name" label="Name" />
        <br />
        <Field
          component={TextInput}
          name="surname"
          id="surname"
          label="Surname"
        />

        <Watch name="name" />

        <Watch name="surname" />
      </>
    </Form>
  );
}

export default App;
