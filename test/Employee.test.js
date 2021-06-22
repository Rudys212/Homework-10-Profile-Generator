const Employee = require("./lib/employee.js");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Was name entered", () => {
  const name = "Bob"
  const test01 = new Employee(name);

  expect(test01.name).toBe(name);
});

test("Can set ID via constructor argument", ()=>{
  const testValue =100;
  const e = new Employee("Bob", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", ()=>{
  const testValue = "test@test.com";
  const e = new Employee("Bob", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", ()=>{
  const testValue = "Bob";
  const e = new Employee(testValue);
});

test("Can get id via getId()", ()=>{
  const testValue = 100;
  const e = new Employee("Bob", 1, testValue);
  expect (e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", ()=>{
  const testValue = "test@test.com";
  const e = new Employee("Bob", 1, testValue);
  expect (e.getId()).toBe(testValue);
});

test("getRole() should return \"Employee\",()=>{
  const testValue ="Employee";
  const e = new Employee("Bob", 1, "test@test.com");
  expect(e.getRole()).testValue(;)
});
