const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const Device = db.device;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const errorHandler = (err, res) => {
  if (err) {
    console.log(err);
    res.status(500).send({ message:  'Ops!' });
    return;
  }
}

exports.signUp = (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save().then(user => {
    let successMsg = { message: `User ${user.name} was registered successfully!` };

    res.status(201).send(successMsg);
  }).catch(err => errorHandler(err, res));
};

exports.signin = (req, res) => {
  User.findOne({name: req.body.user})
      .exec()
      .then(user => {
        if (!user)
          return res.status(404).send({ message: "User Not found." });

        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid)
          return res.status(401).send({ message: "Invalid Password!" });

        const token = jwt.sign({ id: user._id},
                                config.secret,
                                {
                                  algorithm: 'HS256',
                                  allowInsecureKeySizes: true,
                                  expiresIn: 5184000,//60 days
                                });

        res.setHeader('Authorization', token);

        res.status(200).send({
          id: user._id,
          token: token
        });
    }).catch(err => errorHandler(err, res));
};

exports.refresh = async (req, res) => {
  User.findById(req.userId).populate("role").exec()
      .then(user => {
        if (!user)
          return res.status(404).send({ message: "User Not found." });

        var authorities = `ROLE_${user.role.name.toUpperCase()}`;

        const token = jwt.sign({ id: user._id, role: authorities},
                                config.secret,
                                {
                                  algorithm: 'HS256',
                                  allowInsecureKeySizes: true,
                                  expiresIn: 5184000,//60 days
                                });

        res.setHeader('Authorization', token);

        res.status(200).send({
          id: user._id,
          role: authorities,
          token: token
        });
      }).catch(err => errorHandler(err, res));
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};