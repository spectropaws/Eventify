const { query } = require("express");
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

async function updateImage(image, username, type) {
  const query = "update users set " + type + "=$1 where username=$2";
  const values = [image, username];

  try {
    await runQuery(query, values);
    return true;
  } catch (e) {
    console.log(e);
  }
}

async function updateProfile(values) {
  const query =
    "update users set name=$1, designation=$2, description=$3, email=$4, gender=$5, age=$6, organization=$7, social=$8 where username=$9";

  try {
    await runQuery(query, values);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function addEventName(username, events) {
  const query = "update users set events=$1 where username=$2";
  const values = [events, username];
  try {
    await runQuery(query, values);
    return true;
  } catch (e) {
    console.log(err);
    return false;
  }
}

// ==========================================

// =========== Event handling ================

async function insertEvent(values) {
  const query =
    "insert into events(creator, name, tickets, price, description, city, venue, starttime, endtime, registrationclosetime, backgroundimage, qrcode) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)";
  try {
    await runQuery(query, values);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function fetchEventDetails(eventName) {
  const query = "select * from events where name=$1";
  const values = [eventName];
  const result = await runQuery(query, values);
  return result.rows[0];
}

async function grantPermission(eventName) {
  const query = "ALTER TABLE IF EXISTS $1 OWNER TO $2;";
  const values = [eventName, process.env.DB_USERNAME];

  runQuery(query, values);
}

async function fetchEventRegAndReviews(eventName, type) {
  const query = "select * from $1_$2";
  const values = [eventName, type];
  try {
    return await runQuery(query, values);
  } catch (e) {
    return null;
  }
}

exports.runQuery = runQuery;
exports.userExists = userExists;
exports.register = register;
exports.getPasswordHashAndSalt = getPasswordHashAndSalt;
exports.fetchUserDetails = fetchUserDetails;
exports.updateImage = updateImage;
exports.updateProfile = updateProfile;
exports.addEventName = addEventName;
exports.insertEvent = insertEvent;
exports.fetchEventDetails = fetchEventDetails;
exports.grantPermission = grantPermission;
exports.fetchEventRegAndReviews = fetchEventRegAndReviews;
