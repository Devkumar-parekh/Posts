import moment from 'moment';

/**
 * @desc Check if given value is string
 * @param {*} value // Accepts string
 */
export function isStirng(value) {
  var myRegEx = /^[a-zA-Z\s]*$/;
  var isValid = myRegEx.test(value);
  return isValid ? true : false;
}

/**
 * @desc Checks if given value is Number
 * @param {*} value // Accepts string
 */
export function isNumber(value) {
  var myRegEx = /^(\s*[0-9]+\s*)+$/;
  var isValid = myRegEx.test(value);
  return isValid ? true : false;
}

/**
 * @desc Checks for valid email
 * @param {*} value // Accepts string
 */
export function isEmail(value) {
  // eslint-disable-next-line max-len
  var myRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var isValid = myRegEx.test(value);
  return isValid ? true : false;
}

/**
 * @desc Checks for Empty string
 * @param {*} value // Accepts string, object
 */
export function isEmpty(value) {
  if (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * @desc: Check valid date
 */
export function isValidDate(d) {
  return d instanceof Date;
}

/**
 * @desc it return unique GUID string
 */
export const getUniqueId = () => {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (S4() + S4() + '-' + S4() + '-4' + S4().substr(0, 3) + '-' + S4() + '-' + S4() + S4() + S4()).toLowerCase();
};

/**
 * @desc check does it dev mode or live mode
 * it return false only if its a production build
 */
export const isDev = () => {
  if (process.env.NODE_ENV === 'development') {
    return true;
  }
  return false;
};

/**
 * @desc get query params
 */
export const getUrlParams = (queryParams) => {
  if (!queryParams) return new URLSearchParams();
  return new URLSearchParams(queryParams);
};

/**
 * @desc get query param by name
 */
export const getUrlParam = (query, name) => {
  let queryParams = new URLSearchParams();
  if (query) queryParams = new URLSearchParams(query);
  return queryParams.get(name);
};

/**
 * @desc get user friendly string from the given value
 * @param {*} value
 * @param {*} replaceChar
 */
export const UserFriendlyString = (value, replaceChar) => {
  if (!value) return '';
  value = value.trim();

  if (!replaceChar) replaceChar = '_';
  return value === undefined
    ? ''
    : value
        .replace(/[^a-z0-9_]+/gi, replaceChar)
        .replace(/^-|-$/g, '')
        .toLowerCase();
};

export const stringToBoolean = (value) => {
  if (!value) return false;

  switch (value.toString().toLowerCase().trim()) {
    case 'true':
    case 'yes':
    case '1':
      return true;
    case 'false':
    case 'no':
    case '0':
    case null:
      return false;
    default:
      return Boolean(value);
  }
};

export const appEnvironments = () => {
  if (isProduction()) return 'inDevlopment';
  return null;
};

export const isProduction = () => {
  try {
    var url = window.location.href;
    if (url && url.includes('beta.mailcanvas.app')) return false;
  } catch (ex) {}

  if (!isDev()) return true;
  return false;
};

export function mathRound(number, digit = 2) {
  try {
    if (Number(number) < 1) digit = 3;
    if (number) return Number(number).toFixed(digit);
  } catch (e) {}
  return Number(0).toFixed(2);
}

export const removeWhiteSpaceRegex = (str) => {
  return str.replace(/ +/g, '');
};

export const replaceWhiteSpaceWithDash = (str) => {
  return str.replace(/\s+/g, '-');
};

export const getAPIResponseError = (e) => {
  if (e) {
    if (e.response && e.response.data) {
      if (e.response.data.message) {
        return e.response.data.message;
      }
    }
  }
  return;
};

export const formatCurrency = (num) => {
  try {
    if (num) return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } catch (e) {}
  return num;
};

export const currencyWithDecimal = (num) => {
  let returnValue = num;
  try {
    let digit = 2;
    if (num) {
      if (Number(num) < 1) digit = 3;
      if (Number(num) > 999) digit = 1;
      const num2 = Number(num).toFixed(digit);
      returnValue = formatCurrency(num2);
    } else {
      returnValue = Number(0).toFixed(digit);
    }
  } catch (e) {}
  return returnValue;
};

export const removeDuplicates = (data, key) => {
  return [...new Map(data.map((x) => [key(x), x])).values()];
};
