import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const lines = [
  "At 1:47 a.m., when you reopen the trading app at the kitchen table to win back tonight's loss with one more long, close it and walk away.",
  "That revenge trade empties your account, and hitting zero teaches you to risk only money you can afford to lose.",
];

writeFileSync(join(outDir, "entry.txt"), lines.join("\n") + "\n", "utf8");
