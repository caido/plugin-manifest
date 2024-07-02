import fs from "fs";

import { describe, expect, it } from "vitest";

import { validateManifest } from "./validator.js";

describe("Manifest", () => {
  it("Validate frontend manifest", () => {
    const data = JSON.parse(
      fs.readFileSync("./tests/valid_frontend.json", "utf-8"),
    );
    expect(validateManifest(data)).toBe(true);
  });

  it("Validate fullstack manifest", () => {
    const data = JSON.parse(
      fs.readFileSync("./tests/valid_fullstack.json", "utf-8"),
    );
    expect(validateManifest(data)).toBe(true);
  });

  it("Validate missing style manifest", () => {
    const data = JSON.parse(
      fs.readFileSync("./tests/valid_missing_style.json", "utf-8"),
    );
    expect(validateManifest(data)).toBe(true);
  });

  it("Validate invalid version manifest", () => {
    const data = JSON.parse(
      fs.readFileSync("./tests/invalid_version.json", "utf-8"),
    );
    expect(validateManifest(data)).toBe(false);
  });
});
