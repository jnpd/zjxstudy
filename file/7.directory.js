/**
 * 目录
 */

var fs = require('fs');


// 删除文件夹
//fs.rmdirSync("test3/test4")

//删除文件
//fs.unlinkSync('./1.txt')


fs.realpath('./2.txt',function(err,path){
     console.log(path)
})

function deleteP(){

}

//实现级联删除

deleteP('test3')