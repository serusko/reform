# React Form

react form state management library

Context state management based on [use-context-selector](https://github.com/dai-shi/use-context-selector) and [use-reducer](https://react.dev/reference/react/useReducer) hook.

built with [Vite](https://vitejs.dev/guide/build.html#library-mode)

## Intro


[demo.webm](https://github.com/serusko/form/assets/5665925/5b647bd3-cd83-4cac-b25d-9edcfabd133d)

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

## Run

- `yarn build` for production build
- `yarn dev` for development version - vite react app with examples
- `yarn test` for jest - TODO
