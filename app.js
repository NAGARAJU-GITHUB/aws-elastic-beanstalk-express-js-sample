const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!--- NAGRAJU FIRST PROJECT: -- ADDED EXTRA REVIEW STAGE'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
