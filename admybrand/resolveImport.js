import fs from "fs";
import path from "path";

const extensions = [".ts", ".tsx", ".js", ".jsx"];

export function resolveImport(currentFile, importPath) {
  if (!importPath.startsWith(".")) return null;

  const basePath = path.resolve(path.dirname(currentFile), importPath);

  for (const ext of extensions) {
    const full = basePath + ext;
    if (fs.existsSync(full)) return full;
  }

  for (const ext of extensions) {
    const full = path.join(basePath, "index" + ext);
    if (fs.existsSync(full)) return full;
  }

  return null;
}