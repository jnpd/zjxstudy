/**
 * 监控文件和文件夹的变哈
 */

var fs = require('fs');

function exec(current,previous){
    if(Date.parse(previous.ctime)==0){
        console.log('新建的文件')
    }else if(Date.parse(current.ctime)==0){
        console.log('删除了文件')
    }else{
        console.log('修改了')
    }
   console.log('changed')
}
fs.watchFile('2.txt',{interval:0},exec)
