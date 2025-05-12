import { v4 } from "uuid";

export class User {
  public name: string;
  public email: string;
  public password: string;
  public avatar: null;
  public accountId: string;
  public createdAt: Date;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.accountId = v4();
    this.createdAt = new Date();
  }
}
