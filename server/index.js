const PORT = process.env.PORT || 8080;
const cors = require("cors");

const randomstring = require("randomstring");
const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const auth = require("./auth/authenticate");
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
app.post("/signup", jsonParser, (req, res) => {
  const User = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isEventManager: req.body.role,
  };

  if (auth.signup(User)) {
    const token = generateToken();

    currentSessions[token] = User.username;
    res.send(token);
  } else res.send("0");
});

// SignIn User
app.post("/signin", jsonParser, (req, res) => {
  if (req.body.token) {
    const username = currentSessions[req.body.token];
    if (username) {
      return res.send(auth.getUserData());
    } else return res.send(null);
  }

  const User = {
    username: req.body.username,
    password: req.body.password,
  };

  // new login session
  if (auth.signin(User)) {
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

app.post("/create", jsonParser, (req, res) => {
  const name = req.body.name;
});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
