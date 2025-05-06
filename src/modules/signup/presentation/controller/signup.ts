import { AddSignUpModel } from "../../domain/models/add-signup";
import { AddSignUp } from "../../domain/usecases/add-signup";
import { MissingParamError } from "../errors/missing-param-error";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpController {
  constructor(private readonly addSignUp: AddSignUp) {}

  handle(request: HttpRequest<AddSignUpModel.Params>): HttpResponse {
    const requiredFields = [
      "name",
      "email",
      "password",
      "passwordConfirmation",
    ];

    for (const field of requiredFields) {
      if (!request.body[field]) {
        return {
          statusCode: 400,
          body: new MissingParamError(field),
        };
      }
    }

    const { name, email, password, passwordConfirmation } = request.body;
    this.addSignUp.add({
      name,
      email,
      password,
      passwordConfirmation,
    });
  }
}
