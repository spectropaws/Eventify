const { Pool } = require("pg");
require("dotenv").config();

const credentials = {
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const pool = new Pool(credentials);

const runQuery = async (query, values) => {
  const client = await pool.connect();
  const res = await client.query(query, values);
  client.release();
  return res;
};

// ====== Authentication ==============
async function userExists(username) {
  const query = "select id from users where username = $1";
  const values = [username];
  const response = await runQuery(query, values);
  return response.rows.length ? true : false;
}

function register(User) {
  const query =
    "insert into users(name, username, email, passwordHash, salt, role, social) values ($1, $2, $3, $4, $5, $6, $7)";
  const values = [
    User.name,
    User.username,
    User.email,
    User.passwordHash,
    User.salt,
    User.role,
    User.social,
  ];
  try {
    runQuery(query, values);
  } catch (err) {
    console.log(err);
  }
}

async function getPasswordHashAndSalt(username) {
  const query = "select passwordHash, salt from users where username = $1";
  const values = [username];

  const res = await runQuery(query, values);
  return { hash: res.rows[0].passwordhash, salt: res.rows[0].salt };
}

async function fetchUserDetails(username) {
  const query = "select * from users where username = $1";
  const values = [username];

  const res = await runQuery(query, values);
  delete res.passwordhash;
  delete res.salt;
  return res.rows[0];
}
// ====================================

// ====== Edit Profile ==============

async function updateBackground(background, username) {
  const query = "update users set backgroundimage=$1 where username=$2";
  const values = [background, username];

  try {
    await runQuery(query, values);
    return true;
  } catch (e) {
    console.log(e);
  }
}

async function updateProfile(values) {
  const query =
    "update users set name=$1, designation=$2, description=$3, email=$4, gender=$5, age=$6, social=$7 where username=$8";

  try {
    await runQuery(query, values);
    return true;
  } catch (e) {
    console.log(e);
  }
}

exports.userExists = userExists;
exports.register = register;
exports.getPasswordHashAndSalt = getPasswordHashAndSalt;
exports.fetchUserDetails = fetchUserDetails;
exports.updateBackground = updateBackground;
exports.updateProfile = updateProfile;
