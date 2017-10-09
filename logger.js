const fs 		= require('fs');
const basePath	= '/home/essch/test_yandexapp/node-school-wallet-app/source';

console.log("start");
	fs.readFile(basePath + "/log.txt", 'utf8', function(error, data) {
		if (!data) {
			console.log("no date");
		}

		if (date = data.match(/(\d{2})\.(\d{2})\.(\d{4})/)) {
			let str = date[1] + date[2] + date[3];
			new Date(date[1], date[2], date[3]);
			console.log(str);
		}
	});