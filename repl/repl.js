/**
 * Created by lenovo on 2015/9/5.
 */
var repl = require('repl');
var server = repl.start({});
//当前程序运行上下文环境
var context = server.context;
context.name = 'zfpx';
context.age = 6;
context.grow = function(){
    console.log(context.name+' grow '+context.num);
    console.log(this)
}
