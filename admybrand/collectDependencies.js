import { parseFile } from "./parseFile.js";
import { analyzeFile } from "./analyzeFile.js";

export function collectDependencies(file, depth = 1, visited = new Set()) {
  if (depth === 0 || visited.has(file)) return [];

  visited.add(file);

  const ast = parseFile(file);
  const { resolvedImports } = analyzeFile(ast, file);

  let deps = [];

  for (const dep of resolvedImports) {
    deps.push(dep);
    deps = deps.concat(collectDependencies(dep, depth - 1, visited));
  }

  return deps;
}