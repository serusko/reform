import type { Schema } from 'yup';
import type { Data } from './context';
/**
 * Check if field is required in schema
 */
export declare function getIsRequired(schema: undefined | Schema, path: string, context?: unknown): boolean;
export declare function getRequired(schemaDesc: any): any;
/**
 * Validate dataset against provided schema, and return errors
 * @param {Schema} schema
 * @param {Record<string, any>}  data
 * @returns {undefined | Record<string, any>}
 */
export declare function validateSchemaData(schema: undefined | Schema, data: Record<string, unknown>): Record<string, string> | undefined;
/**
 * Get reference-stable validation function
 * - put reference stable schema - once is changed,
 * new validation fn is returned
 * and form could be re-rendered = state could be changed
 */
export declare function useValidation<D extends Data>(schema: Schema): (data: D) => Record<string, string> | undefined;
