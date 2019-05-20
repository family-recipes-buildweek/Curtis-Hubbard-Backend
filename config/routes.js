const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { authenticate } = require("../auth/authenticate");
const secret = require("../auth/secret").jwtKey;
const Users = require("../auth/authenticate");

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login);
};

function register(req, res) { 
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(users => {
      res.status(201).json(users);
    })
    .catch(err => {
      res.status(500).json({errorMessage:"error with registering"});
    });
}

function login(req, res) {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ errorMessage: "Username and/or Password are incorrect" });
      }
    })
    .catch(error => {
      res.status(500).json({errorMessage:"ERROR with logging in"});
    });
}

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
}

