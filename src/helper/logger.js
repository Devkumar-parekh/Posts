/* eslint no-console: ["error", { allow: ["log", "warn", "info", "error"] }] */

/**
 * A module for logging to console
 * Logs info/warning/error to console in `development` environment
 * @module logger
 */

const DEBUG = process.env.ENV === 'development';

/**
 * Logs message to console in `development` environment
 * @param {Object} obj logs the passed object to the console using `console.log`
 */
const log = (obj) => {
  if (DEBUG) {
    // console.log(obj);
  }
};

/**
 * Logs error to console in `development` environment
 * @param {Object} errorObj logs the `errorObj.stack` or errorObj if stack
 * is not present to the console using `console.error`
 */
const error = (errorObj) => {
  if (DEBUG) {
    console.error(errorObj.stack || errorObj);
  }
};

/**
 * Logs warning to console in `development` environment
 * @param {Object} warning logs the passed object to the console using `console.warn`
 */
const warn = (warning) => {
  if (DEBUG) {
    console.warn(warning);
  }
};

/**
 * Logs info to console in `development` environment
 * @param {Object} warning logs the passed object to the console usiing `console.info`
 */
const info = (infoObj) => {
  if (DEBUG) {
    console.info(infoObj);
  }
};

const exports = {
  log,
  error,
  warn,
  info,
};
export default exports;
