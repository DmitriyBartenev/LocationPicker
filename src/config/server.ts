const config = require('../../package.json');

const port = config.config.port;

const _apiURL = 'http://localhost:';

export const pointsURL = `${_apiURL + port}/pickPoints`;
