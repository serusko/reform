[![Known Vulnerabilities](https://snyk.io/test/github/serusko/form/badge.svg)](https://snyk.io/test/github/serusko/form/badge.svg)
[![npm version](https://badge.fury.io/js/@serusko%2Freform.svg)](https://badge.fury.io/js/@serusko%2Freform)

[![npm version](./coverage/badge-statements.svg)](./coverage/badge-statements.svg)
[![npm version](./coverage/badge-branches.svg)](./coverage/badge-branches.svg)
[![npm version](./coverage/badge-functions.svg)](./coverage/badge-functions.svg)
[![npm version](./coverage/badge-lines.svg)](./coverage/badge-lines.svg)

# React Form

Declarative Form State management container based on [use-context-selector](https://github.com/dai-shi/use-context-selector) and [use-reducer](https://react.dev/reference/react/useReducer) hook. Inspired by [formik](https://formik.org/).

This library helps you create forms that are easy to maintain and expand, especially for form-heavy. The solution is flexible and not fixed. It also considers performance, accessibility, and consistency.

built with [Vite](https://vitejs.dev/guide/build.html#library-mode) 🖖

## Example

### Basic Html elements

```jsx
<Form>
  <HtmlField component="input" type="range" name="age" min="1" max="100">

  <HtmlField component="select" label="Agree to T&C" name="gender">
    <option value=""></option>
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </HtmlField>
</Form>
```

## Yup Schema based form

```jsx
<YupForm schema={schema}>
  <Field component={TextField} name="firstName" />
</Form>
```

## Custom Reducer, validation, detecting requiredFields

```jsx

  type data = Yup.TypeOf<schema>;
  type CustomAction = FormAction<Data> & { type: 'onDeleteItem', index: number };
  const props = {
    initialValues: { age: 33 },
    reducer: (prev: FormState<Data>, action: CustomAction) => {
      /** ... implement custom reducer logic */
      return getDefaultFormReducer()(prev, action)
    },
    validation: (data: Data) => {
      /** ... implement custom validation rules */
      return isValid ? errors : undefined
    },
    getRequired: (data: Data) => ({ firstName: true, lastName: !!data.firstName })
    onSubmit: (data: Data) => Promise.resolve(/** custom action **/),
    onStateChange(action: CustomAction<A>, prev: FormState<Data>, next:FormState<Data>, dispatch: Dispatch<FormReducerAction<D>>) => {
      /** track form changes and fire some async actions */
    }
  }

return <Form {...props}>
  <Field component={TextField} name="firstName" />
</Form>
```

\*This is just example and you should keep some values memoized/ reference stable, bcs some form state actions are working as watchers for those values. Read more in Docs, or check `Form.tsx` and its `useEffects(...)`.

## Good Practices

- keep all your form login only in reducer (no "smart fields" with onChange logic overriding different field values)
- keep you data model/schema aligned as much as possible with UI = prevents mind-numbing data editing
- use input/output mapping = you can easily map JSON structures before and after those data are used with UI elements, so you don't need to fight against data structure received from API. Just like prepare data for `initialValues` and then process it `onSubmitCall`

## Features

- optimized re-renders - each field is rendered only if needed by default (like Formik FastField by default but better 😉)
- standardized metadata - pre-defined ux for displaying all states of each field `TODO: provide example, link mockup with explanation`
- HTML input support - You can create form with minimum css (check demo code `app.css`)
- strongly typed - we have support for custom schema Typing + custom Actions (reducer)
- many helper functions / hooks / Components `TODO: document examples`
- for Yup we have automatic detection of "required fields" -
- planned support for ZOD, Ajv
- easily extensible (planned plugin system for custom reducers like history)
- #WIP async validation
- ...

## Intro

[demo.webm](https://github.com/serusko/form/assets/5665925/5b647bd3-cd83-4cac-b25d-9edcfabd133d)

## DOCS

TODO

## TODO

- review HTML field
- Flatten meta setters - error, touched
- implement/review Aria rules
- support YUP
- async validation
  - enable async validation
- html Form tag customization
- add abstraction for Formik
- use some immutable helper for setting values
  - we have to copy nested objects, so we can use some helper and deliver more secure mutations
- field validation
  - enable single field validation
- history tracking
- support ZOD
- support Ajv (Json schema / Open api)
- UI Builder...

## Known issues (To Be Fixed)

1. when using HTML field, error messages are displayed via `setCustomValidity(error) + reportValidity()` - For the first time form is submitted, all fields going to be touched so error is displayed in random order, on second submit looks like "highest/first invalid" is focused (this is desired) = provide deeper testing and display err "first" element on page

## Folders

- /dist - production build output
- /lib - library source code
- /src - example React app (dev mode)

## Development

requires node `>=20` and `yarn`.

Scripts:

- `yarn build` for production build
- `yarn dev` for development version - run dev react app with examples
- `yarn test` for jest - TODO
