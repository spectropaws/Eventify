const { Pool, Client } = require("pg");
const credentials = {
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const pool = new Pool(credentials);

const userExists = (username) => {
  // const client = await pool.connect();
  // const res = client.query("select * from users");
  // console.log(res);
  // client.release();
  return false;
};

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
