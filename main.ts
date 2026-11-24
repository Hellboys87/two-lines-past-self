import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const lines = [
  "When your thumb hovers over the long button late at night with money you need still in the account, close the app and go to sleep.",
  "That one trade wipes you out within the hour, and starting again from zero teaches you that keeping what you have matters more than winning it back.",
];

writeFileSync(join(outDir, "entry.txt"), lines.join("\n") + "\n", "utf8");
