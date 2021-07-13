/**
 * @ts-check
 * */

/**
 * User Login Details Interface
 * @typedef {Object<string, string>} UserLoginDetails
 * @property {string} username Username of the login details
 * @property {string} password Password of the login details
 * */

/**
 * @param {UserLoginDetails} loginInformation
 * @return {Promise<boolean>}
 * */
export const validateLoginCredentials = async (loginInformation) => {
  if (!loginInformation.username || !loginInformation.password) {
    return false
  }

  return true
}