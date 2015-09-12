/**
 * Created by Administrator on 2015/9/7.
 */
var fs = require('fs');
var data = fs.readFileSync('./1.txt','utf8');
console.log(data);

fs.readFile('./1.txt','utf8',function(err,data){
   console.log(data);
})

fs.readFile('./1.txt','utf8',function(err,data){
    console.log(1);
})
fs.readFile('./1.txt','utf8',function(err,data){
    console.log(2)
})