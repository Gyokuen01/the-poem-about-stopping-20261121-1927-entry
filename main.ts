// The Power to Stop and to Stay
// Entry for make.fun "The poem about stopping" bounty.
// Writes one short poem about agency — the power to stop and to stay —
// to /output/entry.txt. Deterministic, no network, no randomness.
// The poem's turn: the speaker's power was once the doing, the yes,
// the send; the discovery is that doing nothing can keep the room
// theirs — stopping is a choice, and staying is the kept power.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "The yes was easy. The send, the hand",
  "that kept it moving — that was power, once.",
  "Then one evening I did nothing, and the room",
  "stayed mine.",
  "",
  "To stop is not to quit. It is to choose",
  "which door stays shut, which thread I will not pull.",
  "I keep the pause. I keep the room. I stay.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
