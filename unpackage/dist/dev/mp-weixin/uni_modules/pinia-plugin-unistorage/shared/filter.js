"use strict";
function get(state, path) {
  return path.reduce((obj, p) => {
    return obj == null ? void 0 : obj[p];
  }, state);
}
function set(state, path, val) {
  return path.slice(0, -1).reduce((obj, p) => {
    if (!/^(__proto__)$/.test(p))
      return obj[p] = obj[p] || {};
    else
      return {};
  }, state)[path[path.length - 1]] = val, state;
}
function pick(baseState, paths) {
  return paths.reduce((substate, path) => {
    const pathArray = path.split(".");
    return set(
      substate,
      pathArray,
      get(baseState, pathArray)
    );
  }, {});
}
exports.pick = pick;
