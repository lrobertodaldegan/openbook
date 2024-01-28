const db = require("../models");
const User = db.user;

const errorHandler = (err, res) => {
  if (err) {
    console.log(err);
    res.status(500).send({ message:  'Ops!' });
    return;
  }
}

checkDuplicateEmail = (req, res, next) => {
  User.findOne({
    email: req.body.email
  }).then((user) => {
    if (user) {
      if(req.userId && req.userId != null){
        User.findById(req.userId).exec().then(userById => {
          if(`${user._id}` === `${userById._id}`){
            next();
          } else {
            res.status(400).send({ message: "Email is already in use!" });
            return;
          }
        }).catch(err => errorHandler(err, res));
      } else {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }
    } else {
      next();
    }
  }).catch(err => errorHandler(err, res));
};

justAdmin = (req, res, next) => {
  if(!req.userId || req.userId == null){
    res.status(401).send({ message: "Unauthorized!" });
    return;
  } else {
    User.findById(req.userId).exec().then(user => {
      if(user.name === 'admin'){
        next();
      } else {
        res.status(401).send({ message: "Unauthorized!" });
        return;
      }
    }).catch(err => errorHandler(err, res));
  }
}

const verifyUser = {
  checkDuplicateEmail,
  justAdmin,
};

module.exports = verifyUser;