import { randomBytes } from "crypto";

export class User {
  public readonly id: string;
  public name: string;
  public email: string;
  public password: string;
  public accountId: string | null;
  public avatar?: string | null;
  public createdAt?: Date;

  constructor(params: Omit<User, "id">) {
    Object.assign(this, params);

    this.id = randomBytes(12).toString("hex");
    this.name = params.name;
    this.email = params.email;
    this.password = params.password;
    this.accountId = params.accountId ?? null;
    this.avatar = params.avatar ?? null;
    this.createdAt = params.createdAt ?? new Date();
  }
}

const user = new User({
  name: "Lucas",
  email: "LTest@test.com",
  password: "12345678",
  accountId: "asdasdasdasdasdasd",
});
console.log(user);
