const BD = require('../libs/Price.js').BD;

let bd = new BD("test.json");
console.log(bd.data == "test.json");

const Many = require('../libs/Price.js').Many;

console.log(Many.add("") == "[]");
console.log(Many.add("[]") == "[]");
console.log(Many.add("[]}") == "[]");
console.log(Many.add("{}") == "[]");
console.log(Many.add("", "a") == '["a"]');
console.log(Many.add('["a"]', "b") == '["a","b"]');
console.log(Many.del('["a", "b"]', 0) == '["b"]');
console.log(Many.del('["a", "b"]', 1) == '["a"]');
console.log(Many.del('["a", "b"]', 2) == '["a","b"]');
console.log(! Many.is('["a", "b"]', 3));
console.log(Many.is('["a", "b"]', 1));

Many.set('["a", "b"]');
console.log('["a", "b"]' == Many.get());