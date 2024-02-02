const db = require("../models");
const Video = db.video;
const User = db.user;

const errorHandler = (err, res) => {
  if (err) {
    console.log(err);
    res.status(500).send({ message:  'Ops!' });
    return;
  }
}

exports.getVideos = (req, res) => {
  User.findById(req.userId).exec().then(user => {
    let filter = {};

    if(user.name !== 'admin')
      filter = {visibility:'Public'};

    Video.find(filter).exec().then(videos => {
      if(videos && videos.length > 0)
        res.status(200).send({videos});
      else
        res.status(204).send({message: 'No content!'});
    }).catch(err => errorHandler(err, res));
  }).catch(err => errorHandler(err, res));
}

exports.newVideos = (req, res) => {
  const newVideo = new Video({
    title: req.body.title,
    resume: req.body.resume,
    url: req.body.url,
    filePath: req.body.fileToUpload,
    visibility: req.body.visibility ? req.body.visibility : 'Public'//or 'Hidden
  });

  newVideo.save().then(video => {
    res.status(201).send(video);
  }).catch(err => errorHandler(err, res));
}

exports.removeVideo = (req, res) => {
  Video.findById(req.params['id']).exec()
  .then(video => {
    if(video){
      Video.deleteOne({_id: video._id})
      .then(() => {
        
        res.status(200).send({message:`Video (${req.params['id']}) deleted!`});  

      }).catch(err => errorHandler(err, res));
    } else {
      res.status(200).send();
    }
  })
  .catch(err => errorHandler(err, res));
}
