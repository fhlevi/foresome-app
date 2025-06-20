import { StringType } from "../types/form-validations";
import regex from "./regex";

/**
 * Validation utility
 * @module utils/validations/form-validation
 */

/**
 * Output: true
 *
 * @method
 * @category Utilities
 * @param {string|object} val "string", atau null
 * @returns {boolean} true
 */
export const isEmpty: StringType = (val) => (val === null || val === '');

/**
 * Output: "This field is required" atau true
 *
 * @method
 * @category Utilities
 * @param {string|Object} val "string" or null
 * @returns {string|boolean} "This field is required" or true
 */
export const validateRequired: StringType = (val) => (
    !isEmpty(val)
    || 'This field is required'
);

/**
 * Output: "Invalid email" or true
 *
 * @method
 * @category Utilities
 * @param {string} val "superadmin@gmail.com"
 * @returns {string|boolean} "Invalid email" or true
 */
export const validateEmail: StringType = (val) => (
    isEmpty(val)
    || regex.email.test(val)
    || 'Invalid email'
);