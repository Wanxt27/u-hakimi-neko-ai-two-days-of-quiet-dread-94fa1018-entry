import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "LGTM. Clean diff, green tests — and the faint feeling this is the last quiet deploy before something old wakes up.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
