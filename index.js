const express 	= require('express');
const fs 		= require('fs');
const { URL }	= require('url');
const fileUrl 	= '/home/essch/test_yandexapp/node-school-wallet-app/source/cards.json';
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send(`<!doctype html>
	<html>
		<head>
			<link rel="stylesheet" href="/style.css">
		</head>
		<body>
			<h1>Hello Smolny!</h1>
		</body>
	</html>`);
});

app.get('/error', (req, res) => {
	throw Error('Oops!');
});

app.get('/transfer', (req, res) => {
	const {amount, from, to} = req.query;
	res.json({
		result: 'success',
		amount,
		from,
		to
	});
});

app.get('/cards', (req, res) => {
	fs.readFile(fileUrl, 'utf8', function (err, cont) {
		res.end(cont);
	});
});

app.get('/cards/add', (req, res) => {
	fs.readFile(fileUrl, 'utf8', function (err, cont) {
		let data = JSON.parse(cont);
		data.apply({
			cardNumber: 2,
			balance: 1
		});
		res.end(JSON.stringify(data));
	});
});

app.listen(3000, () => {
	console.log('YM Node School App listening on port 3000!');
});
