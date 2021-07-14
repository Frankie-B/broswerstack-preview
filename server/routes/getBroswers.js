const express = require('express');

const router = express.Router();
const axios = require('axios');

const BUILD_NUMBER = 'c3aca57ab2c697accb17607b9514fde84c4975d8';

const restBrowserstackApi = new axios.create({
  baseURL: 'https://api.browserstack.com',
});

/* GET home page. */
restBrowserstackApi.get('/', (request, response, next) => {
  response.status(200);
  response.send('Hello World');
});

module.exports = router;
