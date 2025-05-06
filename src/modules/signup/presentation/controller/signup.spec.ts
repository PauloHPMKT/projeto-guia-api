import { SignUpController } from "./signup";

const makeSut = () => {
  const sut = new SignUpController();
  return {
    sut,
  };
};

describe("SignUpController", () => {
  it("should be defined", () => {
    const { sut } = makeSut();

    expect(sut).toBeDefined();
    expect(sut).toBeInstanceOf(SignUpController);
    expect(sut).toBeTruthy();
  });

  it("should return 400 if no name is provided", () => {
    const { sut } = makeSut();
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
    const { sut } = makeSut();
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

  it("should return 400 if no password is provided", () => {
    const { sut } = makeSut();
    const request = {
      body: {
        name: "any_name",
        email: "any_email@mail.com",
        passwordConfirmation: "any_password",
      },
    };
    const httpResponse = sut.handle(request);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("Missing param: password"));
  });

  it("should return 400 if no passwordConformation is provided", () => {
    const { sut } = makeSut();
    const request = {
      body: {
        name: "any_name",
        email: "any_email@mail.com",
        password: "any_password",
      },
    };
    const httpResponse = sut.handle(request);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new Error("Missing param: passwordConfirmation"),
    );
  });
});
