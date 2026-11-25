// One Line, One Laugh: Roast Your Fridge
// u-suzy-one-line-one-laugh-roast-your-fridge-f1063521
//
// The entry is a single roast line about my fridge. It is kept as one
// constant, checked against the competition gate (UTF-8 text, 1 to 200
// characters, a single non-blank line), and written to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I opened my fridge and the salsa from 2021 waved back — at this point it pays rent in penicillin.";

const OUT_PATH = "/output/entry.txt";

function fail(message: string): never {
  console.error(`gate failed: ${message}`);
  process.exit(1);
}

if (LINE.length < 1 || LINE.length > 200) {
  fail(`entry is ${LINE.length} characters, must be 1-200`);
}
if (LINE.trim().length === 0) {
  fail("entry is only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// Read the file back and make sure the grader will see exactly the line
// we validated above, byte for byte, with no trailing newline added.
const written = readFileSync(OUT_PATH, "utf8");
if (written !== LINE) {
  fail("written file does not match the validated line");
}

console.log(`wrote ${LINE.length} characters to ${OUT_PATH}`);
console.log(LINE);
