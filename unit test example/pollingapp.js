function userLogin(username, password) {
  let registeredUsername = "AdamBroughton";
  let registeredPassword = 123456;

  if (username === registeredUsername && password === registeredPassword) {
    return "Valid Account";
  } else if (username != registeredUsername && password != registeredPassword) {
    return "Invalid Account";
  }
}

function createPoll() {
  return "Poll will be created...";
}

// test 3.1 - unvalid account
// function newPoll() {
//   if (userLogin() === "Valid Account") {
//     return createPoll();
//   } else {
//     return "Not a valid account";
//   }
// }

function newPoll() {
  if (userLogin("AdamBroughton", 123456) === "Valid Account") {
    return createPoll();
  } else {
    return "Not a valid account";
  }
}

module.exports = { userLogin, createPoll, newPoll };
