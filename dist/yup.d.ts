import { Schema } from 'yup';
import { FormErrors } from './context';
import { Data } from '.';
/**
 * Validate dataset against provided YUP schema, and return errors
 */
export declare function validateYupSchema(schema: undefined | Schema, data: Data): FormErrors | undefined;
/**
 * Cast data to Yup schema so you get normalized data
 */
export declare function castYupSchema(schema: Schema, data?: Data): any;
