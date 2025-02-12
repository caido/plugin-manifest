import { Ajv } from "ajv";

import schema from "./schema.json" with { type: "json" };

export * from "./schema.generated";

const ajv = new Ajv();
ajv.addFormat(
  "uri",
  /^(https?:\/\/)?([\da-z-]+\.)+([a-z]{2,6})([/\w .-]*)*\/?$/i,
);

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
