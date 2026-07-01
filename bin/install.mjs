#!/usr/bin/env node
// Installs the laws-of-ux skill into a Claude skills directory.
//   npx laws-of-ux            -> ~/.claude/skills/laws-of-ux   (personal)
//   npx laws-of-ux --project  -> ./.claude/skills/laws-of-ux   (this repo)
import { cpSync, existsSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import { homedir } from 'node:os'

const pkgRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const src = join(pkgRoot, 'skills', 'laws-of-ux')

const project = process.argv.includes('--project')
const base = project
  ? join(process.cwd(), '.claude', 'skills')
  : join(homedir(), '.claude', 'skills')
const dest = join(base, 'laws-of-ux')

mkdirSync(base, { recursive: true })
cpSync(src, dest, { recursive: true })

if (!existsSync(join(dest, 'SKILL.md'))) {
  console.error('Install failed: SKILL.md not found at ' + dest)
  process.exit(1)
}
console.log('Installed laws-of-ux skill -> ' + dest)
console.log('Start a new session, then run /laws-of-ux')
