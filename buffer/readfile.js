/**
 * Created by Administrator on 2015/9/6.
 */
var fs = require('fs');
fs.readFile('./file.txt',function(err,data){
    console.log(data)
})