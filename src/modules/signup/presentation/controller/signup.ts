import { MissingParamError } from "../errors/missing-param-error";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpController {
  handle(request: HttpRequest): HttpResponse {
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
  }
}
