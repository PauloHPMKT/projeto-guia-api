import { AddSignUpModel } from "../models/add-signup";

export interface AddSignUp {
  add(data: AddSignUpModel.Params): Promise<AddSignUpModel.Result>;
}
