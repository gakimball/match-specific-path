const containsPath = require('contains-path');

/**
 * Given a list of paths and a target, find the most specific path that matches the target.
 * @param {String[]} paths - Paths to examine.
 * @param {String} needle - Target path.
 * @param {Boolean} [returnIndex] - Return the index of the matched path in the list, instead of the path itself.
 * @returns {(String|Integer)} If `returnIndex` is `true`, the index of the matched path or `-1`. If `returnIndex` is `false`, the matched path or `undefined`.
 */
function match(paths, needle, returnIndex) {
  const list = Array.from(paths).sort();
  let index = -1;

  for (const i in paths) {
    if (containsPath(needle, `./${paths[i]}`)) {
      index = i;
    }
  }

  if (returnIndex) {
    return index;
  }

  return list[index];
}

module.exports = match;

module.exports.index = (paths, needle) => match(paths, needle, true);
