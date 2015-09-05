/**
 * Created by lenovo on 2015/9/5.
 */
var num =9;
var name = 'zfpx';
function say(){
    console.log(num);//只有函数能形成单独作用域
    console.log(name);
    num = 7;
    var num = 6;
}
say();