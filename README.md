# Reform

![logo](https://github.com/serusko/reform/assets/5665925/faf58c5e-004e-40c6-b7ca-9f9a0fcad612)

[![npm version](https://badge.fury.io/js/@serusko%2Freform.svg)](https://www.npmjs.com/package/@serusko/reform)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@serusko/reform)](https://bundlephobia.com/package/@serusko/reform)
![gzip size](https://img.badgesize.io/serusko/reform/master/dist/index.js.svg?compression=gzip)
[![Quality Badge](https://app.codacy.com/project/badge/Grade/51cd57d0debc4aa38226f5e874594b80)](https://app.codacy.com/gh/serusko/reform/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Coverage Badge](https://app.codacy.com/project/badge/Coverage/51cd57d0debc4aa38226f5e874594b80)](https://app.codacy.com/gh/serusko/reform/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_coverage)
[![Known Vulnerabilities](https://snyk.io/test/github/serusko/reform/badge.svg)](https://snyk.io/test/github/serusko/reform/badge.svg)
[![Technical debt](https://badgen.infra.medigy.com/codeclimate/tech-debt/serusko/reform)](https://badgen.infra.medigy.com/codeclimate/tech-debt/serusko/reform.svg)
[![Maintainability](https://badgen.infra.medigy.com/codeclimate/maintainability/serusko/reform)](https://badgen.infra.medigy.com/codeclimate/maintainability/serusko/reform.svg)

<!-- [![npm version](./coverage/badge-statements.svg)](./coverage/badge-statements.svg)
[![npm version](./coverage/badge-branches.svg)](./coverage/badge-branches.svg)
[![npm version](./coverage/badge-functions.svg)](./coverage/badge-functions.svg)
[![npm version](./coverage/badge-lines.svg)](./coverage/badge-lines.svg) -->

Declarative Form State management container based on [use-context-selector](https://github.com/dai-shi/use-context-selector) and [use-reducer](https://react.dev/reference/react/useReducer) hook. Inspired by [formik](https://formik.org/).

This library simplifies the creation and maintenance of forms, making it ideal for form-heavy applications. It emphasizes modularity, flexibility, performance, accessibility, and consistency. By adhering to proven solution patterns, it eliminates unnecessary boilerplate and redundant code. You can start with a simple, single-field form and easily scale it up to a multi-page, complex project with minimal effort.

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

- Centralize all form logic within the reducer (avoid using "smart fields" that override field values with onChange logic).
- Align your data model/schema with the UI as closely as possible to avoid tedious data editing.
- Utilize input/output mapping to easily transform JSON structures before and after interacting with UI elements. This approach helps you seamlessly handle data received from the API, allowing you to prepare `initialValues` and efficiently process data during `onSubmitCall`.

## Features

## Features

- **Optimized Re-renders**: Each field is rendered only when necessary, minimizing unnecessary updates by default.
- **Standardized Metadata**: Pre-defined UX for consistently displaying all field states. `TODO: provide example, link mockup with explanation`.
- **HTML Input Support**: Easily create forms with minimal CSS. `Check demo code: app.css`.
- **Strongly Typed**: Supports custom schema typing and custom actions (via reducer), ensuring type safety across your forms.
- **Extensive Helpers**: Includes a variety of helper functions, hooks, and components to streamline form development. `TODO: document examples`.
- **Yup Integration**: Automatically detects "required fields" when using Yup for validation.
- **Planned Support**: Future compatibility with ZOD and Ajv is on the roadmap.
- **Easily Extensible**: A planned plugin system will allow for custom reducers, like history management.
- **#WIP Async Validation**: Work in progress for seamless asynchronous validation.
- **...**: And much more to come!

## Intro

[demo.webm](https://github.com/serusko/reform/assets/5665925/5b647bd3-cd83-4cac-b25d-9edcfabd133d)

## DOCS

TODO

## TODO

- use html reset form event
- review HTML field
- Flatten meta setters - error, touched
- implement/review Aria rules
- support YUP
- async validation
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

requires node `>=20`.

Scripts:

- `npm run build` for production build
- `npm run dev` for development version - run dev react app with examples
- `npm run test` for jest - TODO
