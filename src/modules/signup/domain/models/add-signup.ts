export namespace AddSignUpModel {
  export type Params = {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  };

  export type Result = {
    id: string;
    name: string;
    email: string;
    avatar?: string | null;
    accountId?: string;
    createdAt?: Date;
  };
}
