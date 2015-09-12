/**
 * Created by lenovo on 2015/9/12.
 */
//console.log(process);
process.argv.forEach(function(arg){

});
console.log(process.argv[2],process.argv[3]);
console.log(process.pid);
process.stdin.setEncoding('utf8');
process.stdin.on('data',function(data){
    console.log(data);
    if(data=='exit\n'){
        console.log('wile exit')
        process.exit();
    }
})
console.log(process.cwd());
console.log(__dirname);
process.chdir('..');
console.log(process.cwd());
console.log(__dirname);