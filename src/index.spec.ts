import fs from "fs";

import { describe, expect, it } from "vitest";

import { validateManifest } from "./index";

describe("Manifest", () => {
  it("validates frontend manifest", () => {
    const data = JSON.parse(
      fs.readFileSync("./tests/valid_frontend.json", "utf-8"),
    );
    expect(validateManifest(data)).toBe(true);
  });

  it("validates workflow manifest", () => {
    const data = JSON.parse(
      fs.readFileSync("./tests/valid_workflow.json", "utf-8"),
    );
    expect(validateManifest(data)).toBe(true);
  });

  it("validates fullstack manifest", () => {
    const data = JSON.parse(
      fs.readFileSync("./tests/valid_fullstack.json", "utf-8"),
    );
    expect(validateManifest(data)).toBe(true);
  });

  it("validates missing style manifest", () => {
    const data = JSON.parse(
      fs.readFileSync("./tests/valid_missing_style.json", "utf-8"),
    );
    expect(validateManifest(data)).toBe(true);
  });

  it("validates invalid version manifest", () => {
    const data = JSON.parse(
      fs.readFileSync("./tests/invalid_version.json", "utf-8"),
    );
    expect(validateManifest(data)).toBe(false);
  });
});
