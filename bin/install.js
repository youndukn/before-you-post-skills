#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const skillName = "linkedin-founder-post-review";
const sourceSkillDir = join(rootDir, "skills", "social-media", skillName);
const sourceCommandsDir = join(rootDir, "commands");

const args = process.argv.slice(2);

function readOption(name) {
  const index = args.indexOf(name);
  if (index === -1) return null;
  return args[index + 1] || null;
}

function hasFlag(name) {
  return args.includes(name);
}

function printHelp() {
  console.log(`Before You Post Skills installer

Usage:
  npx before-you-post-skills
  npx before-you-post-skills --target claude
  npx before-you-post-skills --target codex
  npx before-you-post-skills --target hermes
  npx before-you-post-skills --dir /path/to/project

Options:
  --target <name>   claude | codex | hermes | all
  --dir <path>      Project directory to install into. Defaults to current directory.
  --force           Replace existing installed skill.
  --help            Show this help.
`);
}

if (hasFlag("--help") || hasFlag("-h")) {
  printHelp();
  process.exit(0);
}

if (!existsSync(sourceSkillDir)) {
  console.error(`Missing packaged skill directory: ${sourceSkillDir}`);
  process.exit(1);
}

const projectDir = resolve(readOption("--dir") || process.cwd());
const target = readOption("--target") || "all";
const force = hasFlag("--force");

const targetMap = {
  claude: [
    {
      skill: join(projectDir, ".claude", "skills", skillName),
      commands: join(projectDir, ".claude", "commands"),
    },
  ],
  codex: [
    {
      skill: join(projectDir, ".codex", "skills", skillName),
      commands: join(projectDir, ".codex", "commands"),
    },
  ],
  hermes: [
    {
      skill: join(projectDir, "skills", "social-media", skillName),
      commands: join(projectDir, "commands"),
    },
  ],
  all: [
    {
      skill: join(projectDir, ".claude", "skills", skillName),
      commands: join(projectDir, ".claude", "commands"),
    },
    {
      skill: join(projectDir, ".codex", "skills", skillName),
      commands: join(projectDir, ".codex", "commands"),
    },
  ],
};

if (!targetMap[target]) {
  console.error(`Unknown target "${target}". Use claude, codex, hermes, or all.`);
  process.exit(1);
}

for (const destinationSet of targetMap[target]) {
  const destination = destinationSet.skill;
  if (existsSync(destination)) {
    if (!force) {
      console.error(`Refusing to overwrite existing skill: ${destination}`);
      console.error("Re-run with --force to replace it.");
      process.exit(1);
    }
    rmSync(destination, { recursive: true, force: true });
  }

  mkdirSync(dirname(destination), { recursive: true });
  cpSync(sourceSkillDir, destination, { recursive: true });
  console.log(`Installed ${skillName} -> ${destination}`);

  if (existsSync(sourceCommandsDir)) {
    mkdirSync(destinationSet.commands, { recursive: true });
    for (const commandName of ["byp-init.md", "byp-review.md"]) {
      cpSync(join(sourceCommandsDir, commandName), join(destinationSet.commands, commandName));
    }
    console.log(`Installed /byp-init and /byp-review -> ${destinationSet.commands}`);
  }
}

console.log("\nDone. Try:");
console.log("  /byp-init");
console.log("  /byp-review");
