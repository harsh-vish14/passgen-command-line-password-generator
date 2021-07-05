const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()-=[]\\{}|;',./<>?:";

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let sample = alpha;
  hasNumbers ? (sample += numbers) : "";
  hasSymbols ? (sample += symbols) : "";
  return generatePassword(length, sample);
};

const generatePassword = (length, chars) => {
  let password = "";
  const charsLength = chars.length;
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.round(Math.random() * charsLength));
  }
  return password;
};

module.exports = createPassword;
