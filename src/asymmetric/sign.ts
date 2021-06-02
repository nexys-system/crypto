// see https://nodejs.org/api/crypto.html#crypto_class_sign
import crypto from "crypto";

// start params
const algorithm = "SHA256";
const outputEncoding = "hex";
// end params

export const sign = (data: string, privateKey: crypto.KeyLike): string => {
  const sign = crypto.createSign(algorithm);
  sign.write(data);
  sign.end();
  return sign.sign(privateKey, outputEncoding);
};

export const verify = (
  data: string,
  signature: string,
  publicKey: crypto.KeyLike
): boolean => {
  const verify = crypto.createVerify(algorithm);
  verify.write(data);
  verify.end();
  return verify.verify(publicKey, signature, outputEncoding);
};
