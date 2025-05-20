import { randomBytes } from "crypto";

export class Account {
  public readonly id: string;
  public readonly userId: string;
  public isActive?: Account.isActive;
  public plan?: Account.plan;
  public createdAt?: Date;

  constructor(params: Omit<Account, "id">) {
    Object.assign(this, params);

    this.id = randomBytes(12).toString("hex");
    this.userId = params.userId;
    this.isActive = params.isActive ?? Account.isActive.Active;
    this.plan = params.plan ?? Account.plan.Free;
    this.createdAt = params.createdAt ?? new Date();
  }
}

export namespace Account {
  export enum isActive {
    Active = "Ativo",
    Inactive = "Inativo",
  }

  export enum plan {
    Free = "Gratuito",
    Premium = "Pago",
  }
}
