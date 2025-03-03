import * as Crypto from "expo-crypto";

export class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  async hashPassword() {
    return await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      this.password
    );
  }

  async getUserInfo() {
    return {
      name: this.name,
      email: this.email,
      password: await this.hashPassword(), 
    };
  }

  async verifyPassword(inputPassword) {
    const hashedInput = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      inputPassword
    );
    return hashedInput === this.password;
  }
}
