module.exports = {
  "**/*.ts?(x)": () => ["next lint --fix", "tsc -p tsconfig.json --noEmit"],
  "*.{js,jsx,ts,tsx,md,html,css}": "prettier --write",
};
