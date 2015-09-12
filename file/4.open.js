/**
 * Created by Administrator on 2015/9/7.
 */
var fs = require('fs');


/*process.stdin.on('data',function(data){
    console.log('echo'+data.toString());
})*/


process.stdout.write("log");
process.stderr.write("error")

var buffer = new Buffer(1);
fs.open('1.txt','r+',438/*x=0666*/,function(err,fd){
    console.log(fd);

/*    // fd,buffer,offset,length,position,callback
    // offset 是指从buffer 的第几个位置开始读
    // position 往文件那个索引位置开始写
    /*fs.write(fd,new Buffer('B'),0,1,1,function(){

        //fd,buffer,offset,length,position
        // offset 是指从返回的buffer 第一个索引位置开始写
        // position 往文件那个索引位置开始写
        fs.read(fd,buffer,0,1,1,function(){
            console.log(buffer.toString());
        })

    })*/


    fs.close(fd,function(){
        fs.open('1.txt','sr+',438,function(err,fd){
            console.log(fd)
        })
    })


});


setTimeout(function(){
    var buf = new Buffer(1);
    fs.read(0,buf,0,1,0,function(){
        console.log(buf.toString());
    });
})
