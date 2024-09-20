import * as zod from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isSchemaValid<T>(data: T, schema: zod.ZodObject<any>) {
  const isSchemaValid = schema.safeParse(data);
  if (isSchemaValid.success) {
    return null;
  }
  return isSchemaValid.error.errors[0].message;
}
