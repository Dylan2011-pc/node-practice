const secretService = require('../../services/secret/secretService');

function updateSecret(req, res) {
  const { secretText } = req.body;

  if (!secretText) {
    return res.status(400).json({ error: 'Missing secretText' });
  }

  const encryptedSecret = secretService.encryptSecret(secretText);
  secretService.saveSecretToFile(encryptedSecret);

  res.status(200).json({ message: 'Secret updated successfully' });
}

function validateSecret(req, res) {
  const { secretText } = req.body;
  const savedSecret = secretService.readSecretFromFile();

  if (!secretText || !savedSecret) {
    return res.status(400).json({ error: 'Missing secretText or no saved secret key!' });
  }
  
  const encryptedSecret = secretService.encryptSecret(secretText);

  if (encryptedSecret === savedSecret) {
    res.status(200).json({ valid: true });
  } else {
    res.status(200).json({ valid: false });
  }
}

module.exports = {
  updateSecret,
  validateSecret,
};
