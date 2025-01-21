
const express = require('express');
const { resolve } = require('path');
const dotenv=require("dotenv");
dotenv.config();

// Accessing environment variables
const config = {
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvian: process.env.IS_KaALVIAN === 'true',
};

// Exporting the config object
module.exports = config;

// Logging the variables for testing
console.log(config);

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  // res.sendFile(resolve(__dirname, 'pages/index.html'));
  res.send(config)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});