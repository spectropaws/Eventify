const PORT = process.env.PORT || 8080;
const cors = require("cors");
const timeout = require("connect-timeout");

const randomstring = require("randomstring");
const express = require("express");
const bodyParser = require("body-parser");

const multer = require("multer");
const path = require("path");
const fs = require("fs");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `public/images/${req.params.type}`);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      req.params.type +
        "_" +
        req.body.username +
        "_" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});
let upload = multer({ storage: storage });

const jsonParser = bodyParser.json();
const auth = require("./auth/authenticate");
const editor = require("./edit-profile");
const events = require("./events");
require("dotenv").config();

const app = express();
app.use(express.static("public"));
app.use(haltOnTimedout);
app.use(
  cors({
    origin: [process.env.REACT_ORIGIN],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

/* ============================================= */

// Declarations:
var currentSessions = {};

function generateToken() {
  var token = randomstring.generate({
    length: 20,
    charset: ["alphanumeric", "#", "=", "-", "&", "@"],
  });
  while (currentSessions[token]) {
    token = randomstring.generate({
      length: 20,
      charset: ["alphanumeric", "#", "=", "-", "&", "@"],
    });
  }

  return token;
}

app.get("/", async function (req, res) {
  res.send("Connected to nodejs");
});

// Signup User
app.post("/signup", jsonParser, async (req, res) => {
  const User = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    social: {
      phone: null,
      facebook: "",
      instagram: "",
      linkedin: "",
      twitter: "",
    },
  };

  if (await auth.signup(User)) {
    const token = generateToken();

    currentSessions[token] = User.username;
    res.send(token);
  } else res.send(null);
});

// SignIn User
app.post("/signin", jsonParser, timeout("3s"), async (req, res) => {
  if (req.body.token) {
    const username = currentSessions[req.body.token];
    if (username) {
      const data = await auth.getUserData(username);
      if (data) return res.send(await auth.getUserData(username));
      else return res.send(null);
    } else return res.send(null);
  }

  const User = {
    username: req.body.username,
    password: req.body.password,
  };

  // new login session
  if (await auth.signin(User)) {
    const token = generateToken();
    currentSessions[token] = User.username;
    res.send(token);
  } else {
    res.send(null);
  }
});

app.post("/logout", jsonParser, function (req, res) {
  delete currentSessions[req.body.token];
  res.send(null);
});

// edit profile
app.post(
  "/edit-profile/:type",
  upload.single("file"),
  async function (req, res) {
    const user = await auth.getUserData(req.body.username);
    var filename;
    if (req.params.type === "profile") filename = user.profilephoto;
    else if (req.params.type === "background") filename = user.backgroundimage;

    !(await editor.uploadImage(
      req.body.username,
      req.file.filename,
      req.params.type
    )) && console.log("Error uploading image path");

    if (filename)
      fs.unlink("public/images/" + req.params.type + "/" + filename, (err) => {
        if (err) {
          console.log(err);
        }
      });
    res.send(null);
  }
);

app.post("/edit-profile", jsonParser, async function (req, res) {
  const username = req.body.username;
  delete req.body.username;
  await editor.updateProfile(username, req.body);
  res.send(null);
});

app.post(
  "/create/:type",
  upload.single("backgroundimage"),
  async (req, res) => {
    if (
      await events.createEvent({
        ...req.body,
        backgroundimage: req.file ? req.file.filename : null,
      })
    ) {
      !(await editor.addEvent(req.body.username, req.body.name)) &&
        console.log("Error updating user's event list");
    } else console.log("Error inserting event data to database");

    // create event-registrations and event-reviews tables
    !(await events.initializeEvent(req.body.name)) &&
      console.log("Error creating custom tables for event: " + req.body.name);

    res.send(null);
  }
);

app.post("/event-details", jsonParser, async function (req, res) {
  var mainDetails = await events.getEventDetails(req.body.eventName);
  mainDetails.registrations = await events.getEventRegistrations(
    req.body.eventName
  );
  mainDetails.reviews = await events.getEventReviews(req.body.eventName);
  res.send(mainDetails);
});

app.post("/event-details/:type", jsonParser, async (req, res) => {
  if (req.params.type === "registrations")
    res.send(await events.getEventRegistrations(req.body.event));
  else if (req.params.type === "reviews")
    res.send(await events.getEventReviews(req.body.event));
  else res.send(null);
});

function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
