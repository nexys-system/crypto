import crypto from "crypto";

// create EC keypair
export const createKeypair = (): crypto.KeyPairKeyObjectResult =>
  crypto.generateKeyPairSync("ec", {
    namedCurve: "sect239k1",
  });
