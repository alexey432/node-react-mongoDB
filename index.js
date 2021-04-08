const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ bye: 'buddy' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);


// "engines": {
//   "node": "14.16.0",
//   "npm": "7.6.1"
// },