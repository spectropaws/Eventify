const database = require("./db/database");

async function backgroundImage(username, image) {
  if (await database.updateBackground(image, username)) return true;
  else return null;
}

exports.backgroundImage = backgroundImage;
