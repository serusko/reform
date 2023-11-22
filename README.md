# React Form

react form state management library

Context state management based on [use-context-selector](https://github.com/dai-shi/use-context-selector) and [use-reducer](https://react.dev/reference/react/useReducer) hook.

built with [Vite](https://vitejs.dev/guide/build.html#library-mode)

## TODO

- use some immutable helper for setting values
  - we have to copy nested objects, so we can use some helper
- async validation
  - enable async validation
- field validation
  - enable single field validation
- HTML input support
  - So we can support html tags instead of components and we have to handle actions and state properly
- history tracking
- support ZOD
- support YUP
- support Ajv (Json schema / Open api)
- add abstraction for Formik
- UI Builder...
- html Form tag customization

## Run

- `yarn build` for production build
- `yarn dev` for development version - vite react app with examples
- `yarn test` for jest - TODO
