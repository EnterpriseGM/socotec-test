const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morganMiddleware = require('./middlewares/logger');
const cors = require('cors')
require('dotenv').config({ path: path.join(__dirname, '.env') });

const port = 3002;
const app = express();
const controller = require('./app/ports/primary/controller');
const auth = require('./middlewares/auth');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(cors())
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(morganMiddleware)
app.get('/health', controller.health);
app.post('/login', controller.login);
app.get('/logout', controller.logout);
app.post('/user', controller.createUser);

app.use(auth);
app.get('/user', controller.getUser);
app.put('/user', controller.updateUser);
app.delete('/user', controller.deleteUser);

const server = app.listen(port, () => {
  console.log(`Datatys App running on port ${port}.`);
});
module.exports = server;
