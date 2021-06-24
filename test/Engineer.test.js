const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
  const testValue = "GitHubUsername";
  const e = new Engineer("Bob", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("Bob", 1, "test@test.com", "GitHubUsername");
  expect(e.getRole()).toBe(testValue);
});
