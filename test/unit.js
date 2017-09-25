const Many = require('../libs/Price.js');

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