# React Form

react form state management library

Context state management based on [use-context-selector](https://github.com/dai-shi/use-context-selector) and [use-reducer](https://react.dev/reference/react/useReducer) hook.

built with [Vite](https://vitejs.dev/guide/build.html#library-mode)

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

## Run

- `yarn build` for production build
- `yarn dev` for development version - vite react app with examples
- `yarn test` for jest - TODO
