/**
 * Created by Administrator on 2015/9/6.
 */
exports.name = "zfpx";
var d1 =require('./node_modules/4.dog/index.js');
var d2 =require('./node_modules/4.dog/index.js');
var d3 =require('./node_modules/4.dog/index.js');
d1.log('Tome');
d2.log('Jeery');
console.log(d3.i);
console.log(d1===d2);
console.log(d2===d3);
d1.i =4;
console.log(d3.i);

//取得模块的绝对路径
console.log(require.resolve('./4.dog'));
console.log(require('./package'));


console.log(Object.keys(require.cache));
delete require.cache[require.resolve('./package.json')];
console.log(Object.keys(require.cache));