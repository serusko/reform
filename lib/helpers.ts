// TODO: support more validation libs
interface Schema {
  describe: () => unknown;
}

/**
 * Check if field is required in schema
 */
export function getIsRequired(schema: undefined | Schema, path: string) {
  const map = schema ? getRequired(schema.describe()) : {};

  return !!map[path];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getRequired(schemaDesc: any) {
  type RequiredMap = { [key: string]: RequiredMap | boolean };

  // Heuristics to guess this is a date range
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const looksLikeDateRange = (it: any) =>
    it &&
    it.type === 'object' &&
    it.fields &&
    it.fields.from &&
    it.fields.to &&
    Object.keys(it.fields).length === 2 &&
    it.fields.from.type === 'date' &&
    it.fields.to.type === 'date';

  // We consider field required if it has required validation
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hasRequiredValidation = (it: any) =>
    !!(it && it.tests.find((test: { name: string }) => test.name === 'required'));

  return Object.keys(schemaDesc.fields).reduce((acc, node) => {
    const fieldName = node;
    const it = schemaDesc.fields[fieldName];

    if (looksLikeDateRange(it)) {
      acc[fieldName] = hasRequiredValidation(it);
      return acc;
    } else if (it && it.type === 'object' && it.fields) {
      acc[fieldName] = getRequired(it);
      return acc;
    } else if (it && it.type === 'array' && it.innerType && it.innerType.type === 'object') {
      acc[`${fieldName}$`] = getRequired(it.innerType);
    }

    acc[fieldName] = hasRequiredValidation(it);
    return acc;
  }, {} as RequiredMap);
}
