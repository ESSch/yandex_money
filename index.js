const express 	= require('express');
const fs 		= require('fs');
const { URL }	= require('url');
const fileUrl 	= '/home/essch/test_yandexapp/node-school-wallet-app/source/cards.json';
const Price	= require('./libs/Price.js');

let app = express();

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

/** @example curl http://127.0.0.1:3000/cards */
app.get('/cards', (req, res) => {
	fs.readFile(fileUrl, 'utf8', function (err, cont) {
		res.end(cont);
	});
});

/** @example curl http://127.0.0.1:3000/cards/add */
app.get('/cards/add', (req, res) => {
	fs.readFile(fileUrl, 'utf8', function(error, data) {
		data = Price.add(data + "", {
			cardNumber: 2,
			balance: 1
		});
		res.end(data);
	  fs.writeFile(fileUrl, data);
	});
});

/** @example curl --request POST http://127.0.0.1:3000/cards --data "" */
app.post("/cards", (req, res) => {
	console.log(req);
	let moderate = true;// todo
	if (moderate) {
		console.log(req);
		let addCard = ""; //todo: request data
		res.end(addCard);
	} else {
		res.status(400).send("Bad request"); //todo: set work
	}
});

/** @example 
	curl --request DELETE http://127.0.0.1:3000/cards 
	curl -i --request DELETE http://127.0.0.1:3000/cards/2 | grep HTTP
*/
app.delete(/\/cards\/\d+/, (req, res) => {
	// todo: success /cards/2?clear_cache=Y ?
	let n = req.url.match(/\d+/)[0];
	fs.readFile(fileUrl, 'utf8', function(error, data) {
		if (Price.is(data, n)) {
			data = Price.del(data + "", n);
			console.log(data);
			res.sendStatus(200).end();
		} else {
			res.status(404).send("Card not found");
		}
		fs.writeFile(fileUrl, data);
	});
});

app.listen(3000, () => {
	console.log('YM Node School App listening on port 3000!');
});
