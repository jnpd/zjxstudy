/**
 * Created by lenovo on 2015/9/5.
 */
exports.name = 'zfpx';
var d1 = require('./4.dog');
var d2 = require('./4.dog');
var d3 = require('./4.dog');
d1.log('tom');
d1.log('jerry');
console.log(d1===d2);
d1.i = 4;
console.log(d3.i);

console.log(require.resolve('./4.dog'));
console.log(require('./package.json'));
console.log(Object.keys(require.cache))