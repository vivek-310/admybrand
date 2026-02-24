import fs from "fs";
import { parse } from "@babel/parser";

export function parseFile(filePath) {
  const code = fs.readFileSync(filePath, "utf-8");

  return parse(code, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
  });
}