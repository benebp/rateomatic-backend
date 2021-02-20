'use strict';

const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.port || 3000;
const database = require('./database.js');

app.get('/', (req, res) => {
	database();
	res.send('test');
});

app.listen(PORT, () => {
	console.log(`Listening at ${PORT}`);
});
