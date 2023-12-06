const { Client } = require("pg");
require("dotenv").config();

const credentials = {
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

// var pool = new Pool(credentials);

const runQuery = async (query, values) => {
  const client = new Client(credentials);
  await client.connect();
  const res = await client.query(query, values);
  client.end();
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

  var res = await runQuery(query, values);
  delete res.rows[0].passwordhash;
  delete res.rows[0].salt;
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
    "insert into events(creator, name, tickets, price, description, city, venue, starttime, endtime, registrationclosetime, backgroundimage, qrcode, upiid) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)";
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
  const query = "ALTER TABLE IF EXISTS public." + eventName + " OWNER TO $1;";
  const values = [process.env.DB_USERNAME];
  runQuery(query, values);
}

async function fetchEventRegAndReviews(eventName, type) {
  const query = "select * from " + eventName + "_" + type;
  try {
    let result = await runQuery(query, []);
    return result.rows;
  } catch (e) {
    return null;
  }
}

async function getAllEventNames() {
  const query = "select events from users where role = $1";
  const values = [true];
  let eventNames = [];

  var res = await runQuery(query, values);
  res.rows.forEach((row) => (eventNames = eventNames.concat(row.events)));
  return eventNames;
}

async function insertEventRegistration(details) {
  const query =
    "insert into " +
    details.eventName +
    "_registrations (name, username, email, phone, paymentdate, transactionid) values($1, $2, $3, $4, $5, $6)";
  const values = [
    details.name,
    details.username,
    details.email,
    details.phone,
    details.paymentdate,
    details.transactionid,
  ];

  try {
    await runQuery(query, values);
    return true;
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
exports.getAllEventNames = getAllEventNames;
exports.insertEventRegistration = insertEventRegistration;
