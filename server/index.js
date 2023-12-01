const PORT = process.env.PORT || 8080;
const cors = require("cors");

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
const { fetchUserDetails } = require("./db/database");
require("dotenv").config();

const app = express();
app.use(express.static("public"));
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

app.get("/", function (req, res) {
  res.send("Connected to nodejs");

  user = { username: "comeondaddy", password: "password123" };
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
app.post("/signin", jsonParser, async (req, res) => {
  if (req.body.token) {
    const username = currentSessions[req.body.token];
    if (username) {
      return res.send(await auth.getUserData(username));
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

app.post("/create", jsonParser, (req, res) => {
  const name = req.body.name;
});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
