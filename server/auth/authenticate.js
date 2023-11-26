const bcrypt = require("bcrypt");
const saltRounds = 10;
const database = require("../db/database");
const e = require("cors");

function signin(User) {
  // check if username exists and fetch salt and password hash
  if (!database.userExists(User.username)) return null;

  // temporary
  return database.fetchUserDetails(User.username);

  const checker = database.getPasswordHashAndSalt(User.username);
  // hash the given password with the salt and compare the hashes. if hash matches. return user else null
  bcrypt.hash(User.password, checker.salt, (err, hash) => {
    if (err) console.log(err);
    else {
      bcrypt.compare(hash, checker.hash).then((res) => {
        if (res) return fetchUserDetails(User.username);
        else return null;
      });
    }
  });
}

function signup(User) {
  if (database.userExists(User.username)) return null;

  User.role = "User" ? false : true;
  database.register(User);
  return true;
}

function getUserData(username) {
  return database.fetchUserDetails(username);
}

exports.signin = signin;
exports.signup = signup;
exports.getUserData = getUserData;
