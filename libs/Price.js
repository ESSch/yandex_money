'use strict';

const Many = {
	_jsonToArray: data => {
		try {
			data = JSON.parse(data);
		} catch (e) {
			data = [];
		}

		if (! Array.isArray(data)) {
			data = [];
		}

		return data;
	},
	_arrayToJson: data => {
		return JSON.stringify(data);
	},
	add: (data, add) => {
		data = Many._jsonToArray(data);

		if (undefined !== add) {
			data.push(add);
		}

		return Many._arrayToJson(data);
	},
	del: (data, n) => {
		data = Many._jsonToArray(data);

		if (Array.isArray(data)) {
			let newData = [];
			data.forEach((val, key) => {
				if (key != n) {
					newData.push(data[key]);
				}
			});

			return Many._arrayToJson(newData);;
		}

		return [];
	},
	is: (data, n) => {
		data = Many._jsonToArray(data);

		return data.length > n; 
	}
}

module.exports = Many;