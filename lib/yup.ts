import { Schema } from 'yup';

import { FormErrors } from './context';

import { Data } from '.';

/**
 * Validate dataset against provided YUP schema, and return errors
 */
export function validateYupSchema(schema: undefined | Schema, data: Data) {
  const validationErrors: FormErrors = {};

  if (schema) {
    try {
      schema.validateSync(data, { abortEarly: false });
      return undefined;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (errors: any) {
      if (errors.inner) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        errors.inner.forEach((error: any) => {
          if (error.path) {
            validationErrors[error.path.replaceAll('[', '.').replaceAll('].', '.')] = error.message;
          }
        });
      }
    }
  }

  return validationErrors;
}

/**
 * Cast data to Yup schema so you get normalized data
 */
export function castYupSchema(schema: Schema, data?: Data) {
  // assert = false - bcs of nullable().required()
  return schema.cast(data || {}, { assert: false, stripUnknown: true });
}
