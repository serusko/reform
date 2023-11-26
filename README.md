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
