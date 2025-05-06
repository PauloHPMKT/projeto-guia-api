import { SignUpController } from "./signup";

describe("SignUpController", () => {
  it("should be defined", () => {
    const sut = new SignUpController();

    expect(sut).toBeDefined();
    expect(sut).toBeInstanceOf(SignUpController);
    expect(sut).toBeTruthy();
  });

  it("should return 400 if no name is provided", () => {
    const sut = new SignUpController();
    const request = {
      body: {
        email: "any_email@mail.com",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };
    const httpResponse = sut.handle(request);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("Missing param: name"));
  });

  it("should return 400 if no email is provided", () => {
    const sut = new SignUpController();
    const request = {
      body: {
        name: "any_name",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };
    const httpResponse = sut.handle(request);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("Missing param: email"));
  });
});
