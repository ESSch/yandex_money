function addMany(data, add) {
	try {
		data = JSON.parse(data);
	} catch (e) {
		data = [];
	}

	if (! Array.isArray(data)) {
		data = [];
	}

	if (undefined !== add) {
		data.push(add);
	}

	data = JSON.stringify(data);
	return data;
}
console.log(addMany("") == "[]");
console.log(addMany("[]") == "[]");
console.log(addMany("[]}") == "[]");
console.log(addMany("{}") == "[]");
console.log(addMany("", "a") == '["a"]');
console.log(addMany('["a"]', "b") == '["a","b"]');

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

/** @example http://127.0.0.1:3000/cards */
app.get('/cards', (req, res) => {
	fs.readFile(fileUrl, 'utf8', function (err, cont) {
		res.end(cont);
	});
});

/** @example http://127.0.0.1:3000/cards/add */
app.get('/cards/add', (req, res) => {
	fs.readFile(fileUrl, 'utf8', function(error, data) {
		data = addMany(data + "", {
			cardNumber: 2,
			balance: 1
		});
		res.end(data);
	  fs.writeFile(fileUrl, data);
	});
});

app.listen(3000, () => {
	console.log('YM Node School App listening on port 3000!');
});
