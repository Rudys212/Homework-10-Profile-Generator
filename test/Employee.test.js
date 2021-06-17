const Employee = require("./lib/employee.js");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Was name entered", () => {
  const test01 = new Employee("Rudy");

  expect(test01.name).toBe("Rudy");
});
