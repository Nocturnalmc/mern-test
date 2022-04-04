const express = require('express');
const app = express();

app.use(express.static('./client/build'));

app.get('/generate', (req, res) => {
	res.status(200).json({ generate: 'Successfull' });
});

app.get('/api/v1', (req, res) => {
	res.status(200).json({ msg: 'This is API v1' });
});

app.all('*', (req, res) => {
	res.status(404).send('Not found');
});

const port = 5000;

const start = () => {
	app.listen(port, console.log(`Server is listening at port: ${port}`));
};

start();