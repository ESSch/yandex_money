'use strict';

var addMany = function (data, add) {
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

module.exports = addMany;