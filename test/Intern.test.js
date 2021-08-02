const Intern = require("../lib/Intern");

test("Can set school via constructor arguments", () => {
  const testValue = "UCONN";
  const intern = new Intern("foo", 1, "test@email.com", testValue);
  expect(intern.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const intern = new Intern("foo", 1, "test@email.com", "UCONN");
  expect(intern.getRole()).toBe(testValue);
});

test("Can get school using getSchool()", () => {
  const testValue = "UCONN";
  const intern = new Intern("foo", 1, "test@email.com", testValue);
  expect(intern.getSchool()).toBe(testValue);
});
