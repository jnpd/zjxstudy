/**
 * Created by lenovo on 2015/9/5.
 */
var repl = require('repl');
var server = repl.start({});
//��ǰ�������������Ļ���
var context = server.context;
context.name = 'zfpx';
context.age = 6;
context.grow = function(){
    console.log(context.name+' grow '+context.num);
    console.log(this)
}
