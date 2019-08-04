const { generate } = require('selfsigned');
const fs = require('fs');

const credentials = generate();

fs.writeFileSync('./credentials.pem', credentials.private);
fs.writeFileSync('./credentials.cert', credentials.cert);
