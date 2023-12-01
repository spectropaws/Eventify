const database = require("./db/database");

async function uploadImage(username, image, type) {
  var column;
  if (type === "background") column = "backgroundimage";
  else if (type === "profile") column = "profilephoto";
  if (await database.updateImage(image, username, column)) return true;
  else return null;
}

async function updateProfile(username, newProfile) {
  var gender;
  if (newProfile.gender) gender = newProfile.gender === "male" ? true : false;
  else gender = null;

  const values = [
    newProfile.name,
    newProfile.designation ? newProfile.designation : null,
    newProfile.bio ? newProfile.bio : null,
    newProfile.email,
    gender,
    newProfile.age ? newProfile.age : null,
    newProfile.organization ? newProfile.organization : null,
    newProfile.social,
    username,
  ];

  if (await database.updateProfile(values)) return true;
  else return null;
}

exports.uploadImage = uploadImage;
exports.updateProfile = updateProfile;
