module.exports = (logger) => {
    const config = require('./config');
    const app = require('./express-conf')(logger, config);
    const express = require('express');

    const httpRequester = require('../httpRequester');
    const calaisRequester = require('../calaisRequester')(httpRequester, config.calais);
    const data = require('../data')(calaisRequester);
    const controllers = require('../api/controllers')(data);

    require('../api/routers')(app, express, controllers);

    return app;
};
