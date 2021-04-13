import * as C from "./symmetric";

test("encrypt and decrypt", () => {
  const text = "a seccret text";
  const secretKey = "durbdhrbserjvcejg37fg3hcishfjkic"; // key must be 32 bytes for aes256

  const e = C.encrypt(text, secretKey);
  const d = C.decrypt(e, secretKey);

  expect(text).toEqual(d);
});
