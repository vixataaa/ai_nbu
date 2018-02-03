/* globals undefined*/
/* eslint no-undefined: 0 */

const express = require('express');

const bodyParser = require('body-parser');

module.exports = (logger, config) => {
  const app = express();
  logger.debug('Creating Express application...');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.set('view engine', 'pug');

  app.use(express.static(config.root + '/public'));

  app.use((req, res, next) => {
    // Enable CORS
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  return app;
};
