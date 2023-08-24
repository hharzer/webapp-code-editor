/**
 * @typedef {Object} TypesSyncOptions
 * @property {boolean} [removeUnused=false] - Remove unused types
 * @property {"npm"|"yarn"|"bolt"|"pnpm"} [packageManager="npm"] - Package manager to use
 * @property {string[]} [dependencies=[]] - Dependencies to manually add for sync
 * @property {string[]} [ignore=[]] - ignore these dependencies from removing
 */
/**
 * @type {TypesSyncOptions}
 */
const typesSyncRc = {
  "dependencies": ["node"],
  "ignore": [],
  "packageManager": "npm",
  "removeUnused": true
}

module.exports = typesSyncRc