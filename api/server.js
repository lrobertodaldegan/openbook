const express = require("express");
 
const app = express();
 
// parse requests of content-type - application/json
app.use(express.json({limit:'50mb'}));
 
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit:'50mb' }));
 
//mongoose
const db = require("./app/models");
const Role = db.role;
 
const dbConfig = require("./app/config/db.config");
 
db.mongoose
  .connect(`mongodb://${dbConfig.USER}:${dbConfig.PASS}@${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
 
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://openbook.acaodoespirito.com.br');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization,UserAgent,X-Requested-With,Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,DELETE,POST');
  res.header('Access-Control-Allow-Credentials', true);
 
  next();
});
 
// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/content.routes')(app);
 
// set port, listen for requests
const PORT = 21017;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});