import { Plugin } from "vite";
import { createDirectiveLookupPlugin } from "./createDirectiveLookupPlugin.mjs";

export const useClientLookupPlugin = async ({
  projectRootDir,
  clientFiles,
  forceSourcePaths,
}: {
  projectRootDir: string;
  clientFiles: Set<string>;
  forceSourcePaths?: Set<string>;
}): Promise<Plugin> => {
  return createDirectiveLookupPlugin({
    projectRootDir,
    files: clientFiles,
    forceSourcePaths,
    config: {
      kind: "client",
      directive: "use client",
      virtualModuleName: "virtual:use-client-lookup",
      exportName: "useClientLookup",
      pluginName: "use-client-lookup",
      optimizeForEnvironments: ["ssr", "client"],
    },
  });
};
