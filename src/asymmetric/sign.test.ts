import * as S from "./sign";
import * as Keypair from "./keypair";

const { publicKey, privateKey } = Keypair.createKeypair();
const data = "to be signed";

describe("sign and verify", () => {
  test("valid", () => {
    const s = S.sign(data, privateKey);
    const v = S.verify(data, s, publicKey);

    expect(v).toEqual(true);
  });

  test("invalid", () => {
    const v = S.verify(data, "a wrong signature", publicKey);

    expect(v).toEqual(true);
  });
});
