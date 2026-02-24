import { parseFile } from "./parseFile.js";
import { collectDependencies } from "./collectDependencies.js";
import { sliceExports } from "./sliceExports.js";

export function buildContextBundle(mainFile) {
  const mainAST = parseFile(mainFile);
  const mainCode = sliceExports(mainAST);
  const deps = collectDependencies(mainFile, 1);

  console.log("\n[CTX] Main file:", mainFile);
  console.log("[CTX] Dependencies found:", deps);

  const depSnippets = deps.map((file) => {
    try {
      const ast = parseFile(file);
      return sliceExports(ast);
    } catch (err) {
      console.warn("Skipping dependency (parse failed):", file);
      return "";
    }
  });

  return `
CHANGED LOGIC:
${mainCode}

DEPENDENCIES:
${depSnippets.filter(Boolean).join("\n\n")}
`;
}