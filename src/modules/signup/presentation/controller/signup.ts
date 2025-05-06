export class SignUpController {
  handle(request: any): any {
    if (!request.body.name) {
      return {
        statusCode: 400,
        body: new Error("Missing param: name"),
      };
    }

    if (!request.body.email) {
      return {
        statusCode: 400,
        body: new Error("Missing param: email"),
      };
    }

    if (!request.body.password) {
      return {
        statusCode: 400,
        body: new Error("Missing param: password"),
      };
    }
  }
}
