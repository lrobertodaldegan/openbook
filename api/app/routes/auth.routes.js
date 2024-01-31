const { verifyUser, authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.post(
    "/ob/auth/signup",
    [
      verifyUser.checkDuplicateEmail,
    ],
    controller.signUp
  );

  app.post(
    "/ob/auth/refresh",
    [
      authJwt.verifyToken,
    ],
    controller.refresh
  );

  app.post("/ob/auth/signin", controller.signin);
  app.post("/ob/auth/signout", controller.signout);
};