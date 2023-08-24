import Device from 'mobile-detect';

export { asyncComponentLoader } from "./asyncComponentLoader"

export const device = new Device(window.navigator.userAgent);
export const isDesktop = !(device.mobile() || device.tablet() || device.phone());
export const isMobile = device.mobile();

/**
 * Ensure that a string ends with a new line
 * @param {string} str
 * @returns {string}
 */
export function ensureLastLine(str) {
  return str + (str.slice(-1) === "\n" ? "" : "\n")
}
/**
 * Remove leading tabs from a string
 * @param {string} str
 * @param {string} [replaceWith=""]
 * @param {boolean} [useTab=false]
 * @param {number} [tabWidth=4]
 * @returns {string}
 */
export function rTabs(str,replaceWith="", useTab = false, tabWidth = 4) {
  const pattern = useTab ? `^\\t` : `^ {${tabWidth}}`;
  return str.trim().replace(new RegExp(pattern, "gm"), replaceWith)
}

export function noop(_) {}

export function resetApp(_) {
  return (window.location.href = "/")
}
