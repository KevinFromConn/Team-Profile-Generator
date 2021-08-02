const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number using constructor arguments", () => {
  const testValue = 100;
  const manager = new Manager("foo", 1, "test@email.com", testValue);
  expect(manager.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const manager = new Manager("foo", 1, "test@email.com", 100);
  expect(manager.getRole()).toBe(testValue);
});

test("Can get office number using getOfficeNumber()", () => {
  const testValue = 100;
  const manager = new Manager("foo", 1, "test@email.com", testValue);
  expect(manager.getOfficeNumber()).toBe(testValue);
});
