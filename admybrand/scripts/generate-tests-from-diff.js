import simpleGit from "simple-git";
import fs from "fs-extra";
import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildContextBundle } from "../buildContext.js";
//import Anthropic from "@anthropic-ai/sdk";

const GEMINI_API_KEY=process.env.GEMINI_API_KEY;

const git = simpleGit();
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
// const anthropic = new Anthropic({
//   apiKey:CLAUDE_API_KEY,
// });
async function getRepoRoot() {
  return (await git.revparse(["--show-toplevel"])).trim();
}
async function getChangedFiles() {
  const diff = await git.diff(["--name-only"]);
  const repoRoot = await getRepoRoot();

  return diff
    .split("\n")
    .filter(
      (f) =>
        f &&
        (f.endsWith(".ts") ||
          f.endsWith(".tsx") ||
          f.endsWith(".js") ||
          f.endsWith(".jsx")) &&
        !f.includes("__tests__")
    )
    .map((f) => path.resolve(repoRoot, f));
}

async function callGeminiWithRetry(model, prompt, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (err) {
      if (i === retries - 1) throw err;
      console.log(" Gemini busy, retrying...");
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
}

// async function callClaudeWithRetry(prompt, retries = 3) {
//   for (let i = 0; i < retries; i++) {
//     try {
//       const msg = await anthropic.messages.create({
//         model: "claude-3-5-sonnet-20241022", 
//         max_tokens: 4000,
//         messages: [
//           {
//             role: "user",
//             content: prompt,
//           },
//         ],
//       });

//       return msg.content[0].text;

//     } catch (err) {
//       if (i === retries - 1) throw err;
//       console.log("Claude busy, retrying...");
//       await new Promise(r => setTimeout(r, 2000));
//     }
//   }
// }
function resolveRepoPath(file) {
  const repoRoot = path.resolve(process.cwd(), "..");
  console.log("cwd:", process.cwd());
  const absoluteFile = path.resolve(repoRoot, file);
  return absoluteFile;
}
async function generateTests(file) {
  const repoName = path.basename(process.cwd());
  let cleanPath = file.replace(new RegExp(`^${repoName}[\\\\/]`), "");
  //const code = await fs.readFile(cleanPath, "utf8");
  const absoluteFile = resolveRepoPath(file);
  const code = buildContextBundle(absoluteFile);

  console.log("IT IS STARTED");
  console.log("\n=========== AST CONTEXT DEBUG ===========\n");

  const parts = code.split("DEPENDENCIES:");

  console.log("---- CHANGED LOGIC ----\n");
  console.log(parts[0]);

  console.log("\n---- DEPENDENCIES ----\n");
  console.log(parts[1] || "No dependencies detected");

  console.log("\n=========================================\n");

  const dir = path.dirname(cleanPath);
  const name = path.basename(cleanPath).replace(/\.(ts|tsx|js|jsx)/, "");
  const testDir = path.join(dir, "__tests__");
  const testFile = path.join(testDir, `${name}.test.jsx`);

  let existingTestContent = "";
  if (await fs.pathExists(testFile)) {
    existingTestContent = await fs.readFile(testFile, "utf8");
  }

  
  const prompt = `
  You are a senior QA engineer working in a production React codebase.
  
  Your task is to generate Jest + React Testing Library tests for the following file.
  
  STRICT RULES:
  check whether all the buttons are triggered are not check whther buttons are clickable and it is trigering its function or not
  
  1. Do NOT assume any business logic.
   Only test behavior explicitly implemented in the code.
  
  2. Do NOT guess calculations, API responses, or hidden rules.
   Test only visible UI behavior and state transitions.
  
  3. Tests must run in a real project without modification.
  
  4. Use only:
   - Jest
   - React Testing Library
   - jsdom environment
  
  5. Follow best RTL practices:
   - Prefer getByRole / findByRole
   - Avoid getByText if multiple elements may match
   - Use data-testid only when no semantic selector exists
  
  6. For inputs and sliders:
   - Use fireEvent.input or fireEvent.change
   - Ensure state updates before assertions
  
  7. Do NOT mock components unless absolutely necessary.
   If mocking is required, use correct relative paths.
   Do NOT output JSX inside mocks — use React.createElement.
  
  8. If framer-motion is used:
   mock it safely so animation props do not reach the DOM.
  
  9. Tests must be deterministic and realistic.
   Do NOT test imaginary features.
  
  10. Import the component using a relative path assuming:
    Test file is placed in a __tests__ folder beside the component.
  
    Example:
    Component: src/components/Button.jsx
    Test:      src/components/__tests__/Button.test.jsx
    Import:    import Button from '../Button'
  
  11. Analyze the component and cover these UI behaviors when present:
  
   ✔ Initial render state
   ✔ Conditional rendering
   ✔ State updates from user interaction
   ✔ Visibility toggling of content
   ✔ Switching between items
   ✔ Callback invocation (if props exist)
   ✔ Button click behavior
   ✔ Accessibility roles where applicable
   ✔ Presence of key UI text or sections
  
  12. If content is shown/hidden based on state:
  
   ✔ Verify it appears when triggered
   ✔ Verify it disappears when switching to another item
   ✔ Verify clicking the same trigger twice restores the original state
   ✔ Verify only one item is open at a time if logic implies exclusivity
  
  13. If lists or repeated UI blocks exist:
  
   ✔ Verify all items render
   ✔ Verify interactions work per-item
   ✔ Ensure index-based state updates are respected
  
  14. Avoid testing styling, animations, or Tailwind classes unless
    they directly reflect state changes.
  
  15. Output ONLY runnable test code.
    Do not include explanations, markdown, or comments about the prompt.
  
  16. If a component matches a known UI pattern (accordion, modal, tabs, dropdown),
    ensure regression tests verify open/close behavior.
  
  Before writing tests, internally analyze:
  
  - What state variables exist
  - What props are used
  - What events trigger updates
  - What outputs change
  - What UI patterns are present (accordion, modal, dropdown, toggle, etc.)
  
  Then generate tests ONLY for behaviors implemented in this file.
  Do not rewrite existing tests.
  Do not assume new features.
  Focus only on the provided code.
  Generate ONLY new tests not already present.
  Do not repeat tests.
  verify all the buttons working and everything
  ny onclick is working but the updation is not applied check and tadd testcase
  Append new tests only.
  
  EXISTING TEST FILE:
  ${existingTestContent}
  CODE:
  ${code} 
  `;

  const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
  let response = await callGeminiWithRetry(model, prompt);
  //let response = await callClaudeWithRetry(prompt);
  
  response = response
    .replace(/```javascript/g, "")
    .replace(/```js/g, "")
    .replace(/```/g, "")
    .trim();

  await fs.ensureDir(testDir);

  if (existingTestContent) {
    await fs.appendFile(testFile, "\n\n" + response);
    console.log(`Appended tests for ${file}`);
  } else {
    await fs.writeFile(testFile, response);
    console.log(`Created test for ${file}`);
  }
}

async function run() {
  const files = await getChangedFiles();

  if (!files.length) {
    console.log("No changed files detected.");
    return;
  }

  console.log("Changed files:", files);

  for (const file of files) {
    await generateTests(file);
  }
}

run();
