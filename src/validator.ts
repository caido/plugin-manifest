import { Ajv } from "ajv";

import schema from "./schema.json" assert { type: "json" };

const ajv = new Ajv();

export function validateManifest(data: unknown): boolean {
  console.log("[*] Validating manifest data");
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    console.log(`[-] Errors: ${JSON.stringify(validate.errors, null, 2)}`);
    return false;
  }
  return true;
}
