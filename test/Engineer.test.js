const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor arguments", () => {
  const testValue = "GitHubUser";
  const engineer = new Engineer("foo", 1, "test@email.com", testValue);
  expect(engineer.gitghub).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const engineer = new Engineer("foo", 1, "test@email.com", "GitHubUser");
  expect(engineer.getRole()).toBe(testValue);
});

test("Can get GitHub username using getGitHub()", () => {
  const testValue = "GitHubUser";
  const engineer = new Engineer("foo", 1, "test@email.com", testValue);
  expect(engineer.getGitHub()).toBe(testValue);
});
