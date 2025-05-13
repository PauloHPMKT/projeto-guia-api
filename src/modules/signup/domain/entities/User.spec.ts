import { User } from "./User";

const makeSut = (): User => {
  return new User({
    name: "Lucas",
    email: "LTest@test.com",
    password: "12345678",
    accountId: "asdasdasdasdasdasd",
  });
};

describe("User Entity", () => {
  it("should be defined", () => {
    const sut = makeSut();

    expect(sut).toBeDefined();
  });

  it("shoud create an User", () => {
    const sut = makeSut();

    expect(sut.name).toBe("Lucas");
    expect(sut.email).toBe("LTest@test.com");
    expect(sut.createdAt).toBeInstanceOf(Date);
  });
});
