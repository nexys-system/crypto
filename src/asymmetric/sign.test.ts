import * as S from "./sign";
import * as Keypair from "./keypair";

const { publicKey, privateKey } = Keypair.createKeypair();
const data = "to be signed";
const s = S.sign(data, privateKey);

describe("sign and verify", () => {
  test("valid", () => {
    const v = S.verify(data, s, publicKey);

    expect(typeof s).toEqual("string");
    expect(v).toEqual(true);
  });

  test("invalid signature", () => {
    const v = S.verify(data, "a wrong signature", publicKey);

    expect(v).toEqual(false);
  });

  test("change of content => wrong signature", () => {
    const v = S.verify(data + "s", s, publicKey);

    expect(v).toEqual(false);
  });
});
