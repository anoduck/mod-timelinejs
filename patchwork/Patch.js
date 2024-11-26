const scssFile = fs.readFileSync("font.default.scss").toString();
const patch = fs.readFileSync("font.patch").toString();
const Diff = require('diff');

let patchedFile = diff.applyPatch($scssFile, $patch);
fs.writeFileSync("font.patched.scss", patchedFile);

const one = 'beep boop| Your File';
const other = 'is Patched | beep boob blah';

const diff = Diff.diffChars(one, other);

diff.forEach((part) => {
  // green for additions, red for deletions
  let text = part.added ? part.value.bgGreen :
             part.removed ? part.value.bgRed :
                            part.value;
  process.stderr.write(text);

console.log();
