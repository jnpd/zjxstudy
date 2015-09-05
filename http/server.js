/**
 * Created by lenovo on 2015/9/5.
 */
var http = require('http');
http.createServer(function(req,res){
    res.end('hello');
}).listen(8080);