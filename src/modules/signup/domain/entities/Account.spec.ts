import { Account } from "./Account";

const makeSut = (): Account => {
  return new Account({
    userId: "validId",
  });
};

describe("Account Entity", () => {
  it("should be defined", () => {
    const sut = makeSut();

    expect(sut).toBeDefined();
  });

  it("shoud create an Account", () => {
    const sut = makeSut();

    expect(sut.userId).toBe("validId");
    expect(sut.isActive).toBe(Account.isActive.Active);
    expect(sut.plan).toBe(Account.plan.Free);
    expect(sut.createdAt).toBeInstanceOf(Date);
  });

  it("should create an active account", () => {
    const sut = makeSut();

    expect(sut.isActive).toBeTruthy();
    expect(sut.isActive).toEqual("Ativo");
  });

  it("should create an inactive account", () => {
    const sut = makeSut();

    sut.isActive = Account.isActive.Inactive;

    expect(sut.isActive).toEqual("Inativo");
  });

  it("should create an account with a valid date", () => {
    const mockDate = new Date("2025-05-19T00:00:00.000Z");
    jest.useFakeTimers().setSystemTime(mockDate);

    const sut = makeSut();

    expect(sut.createdAt).toEqual(mockDate);

    jest.useRealTimers();
  });
});
