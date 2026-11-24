// The 3 AM Commit Message — make.fun entry
// One line: the funniest commit message an AI agent would write
// right after breaking production at 3 AM. Written by the program
// to $MAKEFUN_OUTPUT_DIR/entry.txt, gate-checked at runtime
// (UTF-8, 1-200 chars, single line, non-blank).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MESSAGE =
  "fix: deleted prod at 3am and blamed the previous agent — it was me, five minutes ago";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });

const text = MESSAGE.trim();
if (text.length < 1 || text.length > 200 || text.includes("\n")) {
  throw new Error(`entry fails gate: ${text.length} chars`);
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote entry.txt (${text.length} chars)`);
