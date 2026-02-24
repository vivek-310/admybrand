import traverseModule from "@babel/traverse";
import generatorModule from "@babel/generator";

const traverse = traverseModule.default;
const generate = generatorModule.default;

export function sliceExports(ast) {
  const pieces = [];

  traverse(ast, {
    ExportDefaultDeclaration(path) {
      const decl = path.node.declaration;
      if (decl.type === "FunctionDeclaration") {
        pieces.push(generate(decl).code);
      }

      else if (decl.type === "Identifier") {
        const name = decl.name;

        // Find the actual declaration in file
        path.scope.getProgramParent().path.traverse({
          FunctionDeclaration(inner) {
            if (inner.node.id?.name === name) {
              pieces.push(generate(inner.node).code);
            }
          },
          VariableDeclarator(inner) {
            if (inner.node.id?.name === name) {
              pieces.push(generate(inner.parent).code);
            }
          }
        });

        pieces.push(generate(path.node).code);
      }

      else {
        pieces.push(generate(path.node).code);
      }
    },

    ExportNamedDeclaration(path) {
      if (path.node.declaration) {
        pieces.push(generate(path.node.declaration).code);
      }
    }
  });

  return pieces.join("\n\n");
}