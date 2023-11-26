const bcrypt = require("bcrypt");
const saltRounds = 10;
const database = require("../db/database");
const e = require("cors");

async function signin(User) {
  if (!(await database.userExists(User.username))) return null;

  const checker = await database.getPasswordHashAndSalt(User.username);
  const hash = await bcrypt.hash(User.password, checker.salt);
  return hash === checker.hash
    ? await database.fetchUserDetails(User.username)
    : null;
}

async function signup(User) {
  if (await database.userExists(User.username)) return null;
  User.role = "user" ? false : true;

  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(User.password, salt);
    User.passwordHash = hash;
    User.salt = salt;
    database.register(User);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function getUserData(username) {
  return await database.fetchUserDetails(username);
}

exports.signin = signin;
exports.signup = signup;
exports.getUserData = getUserData;
