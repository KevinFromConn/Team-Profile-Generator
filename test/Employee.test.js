const Employee = require("../lib/Employee");

test("Can create an employee instance", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("Can set name based on constructor arguments", () => {
  const name = "Rudy";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("Can set ID based on constructor arguments", () => {
  const testValue = 100;
  const employee = new Employee("foo", testValue);
  expect(employee.id).toBe(testValue);
});

test("Can set Email based on constructor arguments", () => {
  const testValue = "test@email.com";
  const employee = new Employee("foo", 1, testValue);
  expect(employee.email).toBe(testValue);
});

test("Can get name based on getName()", () => {
  const testValue = "Rudy";
  const employee = new Employee(testValue);
  expect(employee.getName()).toBe(testValue);
});

test("Can get ID based on getID()", () => {
  const testValue = 100;
  const employee = new Employee("foo", testValue);
  expect(employee.getID()).toBe(testValue);
});

test("Can get email based on getEmail()", () => {
  const testValue = "test@email.com";
  const employee = new Employee("foo", 1, testValue);
  expect(employee.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = "Employee";
  const employee = new Employee("Rudy", 1, "test@email.com");
  expect(employee.getRole()).toBe(testValue);
});
