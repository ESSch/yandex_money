const addMany = require('./libs/my.js');

console.log(addMany("") == "[]");
console.log(addMany("[]") == "[]");
console.log(addMany("[]}") == "[]");
console.log(addMany("{}") == "[]");
console.log(addMany("", "a") == '["a"]');
console.log(addMany('["a"]', "b") == '["a","b"]');