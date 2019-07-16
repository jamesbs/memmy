const fs = require('fs');
const { join } = require('path');
const { get } = require('lodash');

module.exports = (on, config) => {
  const angularConfig = JSON.parse(fs.readFileSync(join(__dirname, '../../angular.json')));

  const port = get(angularConfig, 'projects.web.architect.serve.options.port') || 4200;
  const env = {
    appEndpoint: `http://localhost:${port}`
  };
  return {
    ...config,
    env,
  };
};
