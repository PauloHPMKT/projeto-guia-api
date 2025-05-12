import { User } from "./User";

describe("User Entity", () => {
  it("shoud create an User", () => {
    const newUser = new User("Lucas", "LTeste@teste.com", "12345678");

    expect(newUser.name).toBe("Lucas");
    expect(newUser.email).toBe("LTeste@teste.com");
    expect(newUser.accountId).toBeDefined();
    expect(newUser.createdAt).toBeInstanceOf(Date);
  });
});
