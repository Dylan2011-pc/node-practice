const secretService = require("../src/services/secret/secretService");

const secretText = "zenitech";

describe("secretService", () => {
  describe("encryptSecret", () => {
    it("should encrypt secret", () => {
      const encryptedSecret = secretService.encryptSecret(secretText);
      expect(encryptedSecret).toBe(
        "1b1df4d7a800e0629611597801088561656d67be31bf6e755976e2328872c459"
      );
    });
  });

  describe("saveSecretToFile", () => {
    it("should save encrypted secret to file", () => {
      const encryptedSecret = secretService.encryptSecret(secretText);
      secretService.saveSecretToFile(encryptedSecret);
      const savedSecret = secretService.readSecretFromFile();
      expect(savedSecret).toBe(encryptedSecret);
    });
  });

  describe("validateSecret", () => {
    it("should validate secret", () => {
      const encryptedSecret = secretService.encryptSecret(secretText);
      secretService.saveSecretToFile(encryptedSecret);
      const isValid = secretService.validateSecret(secretText);
      expect(isValid).toBe(true);
    });
  });
});
