/**
 * 目录
 */

var fs = require('fs');
makeP('test3/test4/test5',function(err){
   if(err) {
       console.log('创建目录失败');
   }else{
       console.log('创建目录成功');
   }
})

function makeP(path){
    var paths = path.split('/');
    for(var i =1;i<=paths.length;i++){
        var p = paths.slice(0,i).join('/');
        var exists = fs.existsSync(p);
        if(exists){
            continue;
        }else{
            fs.mkdirSync(p);
        }
    }

}/**/
/*

fs.stat('1.txt',function(err,data){
     console.log(data)
})
fs.exists('12.txt',function(e){
    console.log(e)
})*/
