const { authJwt, verifyUser } = require("../middlewares");
const controller = require("../controllers/content.controller");

module.exports = function(app) {
  app.get(
    "/ob/content/videos", 
    [authJwt.verifyToken],
    controller.getVideos
  );

  app.post(
    "/ob/content/videos", 
    [authJwt.verifyToken, verifyUser.justAdmin],
    controller.newVideos
  );

  app.delete(
    "/ob/content/video/:id", 
    [authJwt.verifyToken, verifyUser.justAdmin],
    controller.removeVideo
  );
};