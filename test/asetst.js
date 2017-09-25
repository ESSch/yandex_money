const { spawn } = require('child_process');
const get = spawn('curl', ['http://127.0.0.1:3000/cards']);

get.stdout.on('data', (data) => {
	console.log("get:");
	console.log(data != "");
	console.log(JSON.parse(data)[0] != "");
	console.log(JSON.parse(data)[0].cardNumber != "");
	console.log(+JSON.parse(data)[0].cardNumber != 0);
});

get.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

const del = spawn('curl', ['DELETE', 'http://127.0.0.1:3000/cards']);
del.stdout.on('data', (data) => {});