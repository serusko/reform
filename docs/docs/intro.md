---
sidebar_position: 1
---

# Installation

```bash
npm i @serusko/reform
```

## Example of use

```typescript
import Form, { Field } from '@serusko/reform'

...
const App = () => (
  <Form onSubmit={console.log}>
    <HtmlField label="First Name" name="firstName" />

    <button type="submit">Submit</button>
  </Form>
);
```


