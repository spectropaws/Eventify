const { Pool, Client } = require("pg");
const credentials = {
  user: process.env.DARA,
  host: "localhost",
  database: "nodedemo",
  password: "yourpassword",
  port: 5432,
};

function userExists(username) {
  // check in database if username already exists. return true or false
  return false;
}

function register(User) {
  /* User = {
        name: "",
        username: "",
        email: "",
        passwordHash: binarydata,
        salt: "",
        role: true/false,
    } */
  // connects to database, auto-increment id and put these values
  return true;
}

function getPasswordHashAndSalt(username) {
  // return object of format {hash: "", salt: ""}
}

function fetchUserDetails(username) {
  // fetch all user details and return an object of format:
  /* User = {
        id: int,
        name: "",
        username: "",
        email: "",
        role: true/false,
        age: Int,
        designation: "",
        organization: "",
        porfilePhoto: ""
    } */
  return { username: "allah hu akbar" };
}

exports.userExists = userExists;
exports.register = register;
exports.getPasswordHashAndSalt = getPasswordHashAndSalt;
exports.fetchUserDetails = fetchUserDetails;
