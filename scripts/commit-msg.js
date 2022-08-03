const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const [, , COMMIT_MSG_FILE] = process.argv;

const commitMessagePath = path.resolve(process.cwd(), COMMIT_MSG_FILE);
let commitMessage = fs.readFileSync(commitMessagePath, { encoding: "utf-8" });

// Convert first letter of commit message to uppercase
commitMessage = commitMessage.replace(/^\w/, (c) => c.toUpperCase());

// Get branch name
function getBranchName() {
  try {
    return execSync("git symbolic-ref --short HEAD")
      .toString()
      .split("/")
      .pop();
  } catch (e) {
    const [headNamePath] = ["rebase-merge", "rebase-apply"]
      .map((dir) =>
        execSync(`git rev-parse --git-path ${dir}`).toString().trim()
      )
      .map((dirPath) => `${dirPath}/head-name`)
      .filter((headPath) => fs.existsSync(headPath));

    if (headNamePath) {
      return fs
        .readFileSync(headNamePath, { encoding: "utf-8" })
        .split("/")
        .pop();
    }
  }

  return "";
}

const branchName = getBranchName();

// Remove feature- / bugfix- / hotfix- / task- / test- in branch names
const prefixMatch = branchName.match(/(feature|bugfix|hotfix|task|test)-(.*)/);

// Add commit message prefix
if (prefixMatch && !commitMessage.match(new RegExp(`^${prefixMatch[2]}`))) {
  commitMessage = `${prefixMatch[2]}: ${commitMessage}`;
}

// Write new commit message
fs.writeFileSync(commitMessagePath, commitMessage, { encoding: "utf-8" });
