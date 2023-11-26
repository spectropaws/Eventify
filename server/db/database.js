const { Pool, Client } = require("pg");
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

async function userExists(username) {
  const query = "select id from users where username = $1";
  const values = [username];
  const response = await runQuery(query, values);
  return response.rows.length ? true : false;
}

function register(User) {
  const query =
    "insert into users(name, username, email, passwordHash, salt, role) values ($1, $2, $3, $4, $5, $6)";
  const values = [
    User.name,
    User.username,
    User.email,
    User.passwordHash,
    User.salt,
    User.role,
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
  const query =
    "select id, name, username, email, role, age, gender, designation, organization, profilePhoto from users where username = $1";
  const values = [username];

  const res = await runQuery(query, values);
  return res.rows[0];
}

exports.userExists = userExists;
exports.register = register;
exports.getPasswordHashAndSalt = getPasswordHashAndSalt;
exports.fetchUserDetails = fetchUserDetails;
