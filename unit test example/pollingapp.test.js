const app = require("./pollingapp");

// test case 1
test("Verify successfull user login", () => {
  expect(app.userLogin("AdamBroughton", 123456)).toBe("Valid Account");
});

//test case 2
test("Invalid user login", () => {
  expect(app.userLogin()).toBe("Invalid Account");
});

//test case 3.1 - Poll creation: unvalid account
// test("Poll creation", () => {
//   expect(app.newPoll()).toBe("Not a valid account");
// });

//test case 3.2 - valid account
test("Poll creation", () => {
  expect(app.newPoll()).toBe("Poll will be created...");
});
