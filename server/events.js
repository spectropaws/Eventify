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

exports.createEvent = createEvent;
exports.getEventDetails = getEventDetails;
