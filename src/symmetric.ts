// see https://stackoverflow.com/questions/41043878/symmetric-encryption-with-nodejs
import crypto from "crypto";

// start params
const algorithm = "aes256";
const inputEncoding = "utf8";
const outputEncoding = "hex";
const ivlength = 16; // AES blocksize
// end params

export const encrypt = (text: string, skey: string): string => {
  const key = Buffer.from(skey, "latin1");
  const iv = crypto.randomBytes(ivlength);

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let ciphered = cipher.update(text, inputEncoding, outputEncoding);
  ciphered += cipher.final(outputEncoding);
  const ciphertext = iv.toString(outputEncoding) + ":" + ciphered;

  return ciphertext;
};

export const decrypt = (ciphertext: string, skey: string): string => {
  const key = Buffer.from(skey, "latin1");
  const [iv, cipher] = ciphertext.split(":");
  const iv_from_ciphertext = Buffer.from(iv, outputEncoding);
  const decipher = crypto.createDecipheriv(algorithm, key, iv_from_ciphertext);
  let deciphered = decipher.update(cipher, outputEncoding, inputEncoding);
  deciphered += decipher.final(inputEncoding);

  return deciphered;
};
