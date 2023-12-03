const { query } = require("express");
const database = require("./db/database");

async function dateFormat(date) {
  return new Date(date).toISOString().replace(/T/, " ").replace(/\..+/, "");
}

async function createEvent(event) {
  const values = [
    event.username,
    event.name,
    event.tickets,
    event.price,
    event.description,
    event.city,
    event.venue,
    await dateFormat(event.starttime),
    await dateFormat(event.endtime),
    await dateFormat(event.registrationclosetime),
    event.backgroundimage,
    event.qrcode,
  ];

  if (await database.insertEvent(values)) return true;
  else return false;
}

async function getEventDetails(eventName) {
  return await database.fetchEventDetails(eventName);
}

async function getEventRegistrations(eventName) {
  return await database.fetchEventRegAndReviews(eventName, "registrations")
    .rows;
}

async function getEventReviews(eventName) {
  return await database.fetchEventRegAndReviews(eventName, "reviews").rows;
}

async function initializeEvent(eventName) {
  const registration_query =
    "create table " +
    eventName +
    "_registrations (id serial primary key, name varchar(255), username varchar(255), email varchar(255), phone bigint, paymentdate timestamp, transactionid varchar(255) unique)";
  const reviews_query =
    "create table " +
    eventName +
    "_reviews (id serial primary key, username varchar(255), stars bigint, review text)";

  try {
    await database.runQuery(registration_query, []);
    await database.runQuery(reviews_query, []);
    database.grantPermission(eventName);
    return true;
  } catch (e) {
    return false;
  }
}

exports.createEvent = createEvent;
exports.getEventDetails = getEventDetails;
exports.initializeEvent = initializeEvent;
exports.getEventRegistrations = getEventRegistrations;
exports.getEventReviews = getEventReviews;
