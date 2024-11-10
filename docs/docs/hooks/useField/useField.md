# useField

Retrieve whole metadata for single field including `value`, `errors`, and also action like `setValue`, `setTouched`.

## Example 

```typescript
import Field from '@serusko/reform/components/Field`;

const { value, setValue, error, touched, setTouched } = useField('firstName');
```

## Deps

This field groups all metadata:

- [`useFieldInitialValue`](/hooks/useField/useFieldInitialValue)
- [`useFieldTouched`](/hooks/useField/useFieldTouched)
- [`useFieldIsChanged`](/hooks/useField/useFieldIsChanged)
- [`useFieldError`](/hooks/useField/useFieldError)
- [`useIsFieldDisabled`](/hooks/useField/useIsFieldDisabled)
- [`useFieldIsRequired`](/hooks/useField/useFieldIsRequired)
