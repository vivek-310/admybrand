import traverseModule from "@babel/traverse";
import { resolveImport } from "./resolveImport.js";
const traverse = traverseModule.default;
export function analyzeFile(ast,filePath) {
  const imports = [];
  const exports = [];

  traverse(ast, {
    ImportDeclaration(path) {
      imports.push(path.node.source.value);
    },

    ExportNamedDeclaration(path) {
      if (path.node.declaration?.id?.name) {
        exports.push(path.node.declaration.id.name);
      }
    },

    ExportDefaultDeclaration() {
      exports.push("default");
    },
  });
  const resolvedImports = imports
  .map(imp => resolveImport(filePath, imp))
  .filter(Boolean);

  return { imports, exports ,resolvedImports};
}