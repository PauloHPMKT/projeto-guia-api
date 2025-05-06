import { AddSignUpModel } from "../../domain/models/add-signup";
import { AddSignUp } from "../../domain/usecases/add-signup";
import { MissingParamError } from "../errors/missing-param-error";
import { HttpRequest } from "../protocols/http";
import { SignUpController } from "./signup";

const makeSignUp = (): AddSignUp => {
  class AddSignUpStub implements AddSignUp {
    async add(data: AddSignUpModel.Params): Promise<AddSignUpModel.Result> {
      return new Promise((resolve) =>
        resolve({
          id: "valid_id",
          name: "valid_name",
          email: "valid_email@mail.com",
          avatar: null,
          accountId: "valid_account_id",
          createdAt: new Date("2025-01-01T00:00:00Z"),
        }),
      );
    }
  }

  return new AddSignUpStub();
};

const makeSut = (): SutTypes => {
  const addSignStub = makeSignUp();
  const sut = new SignUpController(addSignStub);
  return {
    sut,
    addSignStub,
  };
};

type SutTypes = {
  sut: SignUpController;
  addSignStub: AddSignUp;
};

describe("SignUpController", () => {
  type HttpRequetHandler = HttpRequest<AddSignUpModel.Params>;

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
    const httpResponse = sut.handle(request as HttpRequetHandler);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("name"));
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
    const httpResponse = sut.handle(request as HttpRequetHandler);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("email"));
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
    const httpResponse = sut.handle(request as HttpRequetHandler);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("password"));
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
    const httpResponse = sut.handle(request as HttpRequetHandler);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new MissingParamError("passwordConfirmation"),
    );
  });

  it("should call AddSignUp with correct values", () => {
    const { sut, addSignStub } = makeSut();
    const addSpy = jest.spyOn(addSignStub, "add");
    const request = {
      body: {
        name: "any_name",
        email: "any_email@mail.com",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };
    sut.handle(request as HttpRequetHandler);
    expect(addSpy).toHaveBeenCalledWith({
      name: "any_name",
      email: "any_email@mail.com",
      password: "any_password",
      passwordConfirmation: "any_password",
    });
  });
});
