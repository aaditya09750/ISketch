module.exports = {
  "*.{ts,tsx,js,mjs,cjs}": ["eslint --fix --max-warnings=0 --no-warn-ignored"],
  "*.{json,md,yml,yaml,css}": ["prettier --write"],
}
