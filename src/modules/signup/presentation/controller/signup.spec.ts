import { SignUpController } from "./signup";

describe("SignUpController", () => {
  it("should be defined", () => {
    const sut = new SignUpController();
    expect(sut).toBeDefined();
  });
});
