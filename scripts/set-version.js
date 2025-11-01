import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const packagePath = path.join(__dirname, '../package.json')
const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf-8'))

// Get git commit info
const commit = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || 'local'
const branch = process.env.VERCEL_GIT_COMMIT_REF || 'dev'

// Create version info object
const versionInfo = {
  version: pkg.version,
  commit,
  branch,
  buildTime: new Date().toISOString(),
}

// Write to public/version.json for runtime access
const versionFile = path.join(__dirname, '../public/version.json')
fs.writeFileSync(versionFile, JSON.stringify(versionInfo, null, 2))

console.log(`✓ Version file generated: v${versionInfo.version} (${versionInfo.commit})`)