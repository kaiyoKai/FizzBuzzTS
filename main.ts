import { testFizzBuzz, createRange } from "./fizzBuzz.js";
import { mkdir } from "node:fs/promises";
import { writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { parseArgs } from "node:util";

export const genericErrorMessage =
  "Da ist was schiefgelaufen: (Womp Womp ;() )";

async function writeToTestFile(path: string, text: string) {
  try {
    const dir = dirname(path);

    await mkdir(dir, { recursive: true });
    await writeFile(path, text);
    console.log(`Datei wurde erfolgreich in ${path} gespeichert!`);
  } catch (error) {
    console.error(genericErrorMessage, error);
  }
}
const options = {
  start: { type: "string", short: "s" },
  end: { type: "string", short: "e" },
  view: { type: "boolean", short: "v" },
} as const;

async function main() {
  const { values } = parseArgs({ options });

  const start = parseInt(values.start || "1");
  const end = parseInt(values.end || "100");

  const range = createRange(start, end);
  const date = new Date().toLocaleDateString();
  const dir = `./TestResults/fizzBuzzTest${date}.txt`;

  const resultText = testFizzBuzz(range);
  await writeToTestFile(dir, resultText);

  if (values.view) {
    console.log(`Starte FizzBuzz von ${start} bis ${end}...`);
    console.log(resultText);
  }
}

main().catch(console.error);
