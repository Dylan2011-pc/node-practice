const crypto = require('crypto');
const fs = require('fs');

let currentSecret = '';

//encrypt
function encryptSecret(secret) {
  const hash = crypto.createHash('sha256'); //define hash coding method
  hash.update(secret);
  return hash.digest('hex');
}

//write encrypted text to the file
function saveSecretToFile(encryptedSecret) {
  fs.writeFileSync('secret.txt', encryptedSecret);
  currentSecret = encryptedSecret;
}

//read data from file
function readSecretFromFile() {
  return fs.readFileSync('secret.txt', 'utf8');
}

//check if encrypted text equal saved one
function validateSecret(secretText) {
  const encryptedSecret = encryptSecret(secretText);
  const savedSecret = readSecretFromFile();
  return encryptedSecret === savedSecret;
}

module.exports = {
  encryptSecret,
  saveSecretToFile,
  readSecretFromFile,
  validateSecret
};
