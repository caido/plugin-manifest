/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Schema = Manifest;
export type ManifestID = string;
export type ManifestPlugin =
  | {
      backend?: ManifestFrontendPluginConnection | null;
      entrypoint?: string | null;
      id: ManifestID;
      kind: "frontend";
      name?: string | null;
      style?: string | null;
      [k: string]: unknown;
    }
  | {
      entrypoint: string;
      id: ManifestID;
      kind: "backend";
      name?: string | null;
      runtime: ManifestBackendPluginRuntime;
      [k: string]: unknown;
    }
  | {
      id: ManifestID;
      kind: "workflow";
      name?: string;
      definition: string;
      [k: string]: unknown;
    };
export type ManifestBackendPluginRuntime = "javascript";

export interface Manifest {
  author?: ManifestAuthor | null;
  description?: string | null;
  id: ManifestID;
  name?: string | null;
  plugins: ManifestPlugin[];
  version: string;
  [k: string]: unknown;
}
export interface ManifestAuthor {
  email?: string | null;
  name?: string | null;
  url?: string | null;
  [k: string]: unknown;
}
export interface ManifestFrontendPluginConnection {
  id: ManifestID;
  [k: string]: unknown;
}