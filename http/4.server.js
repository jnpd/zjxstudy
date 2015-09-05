/**
 * Created by lenovo on 2015/9/5.
 */
var http = require('http');
var fs  = require('fs');
var mime = require('mime');
http.createServer(function(req,res){
    var url = req.url;
    //  /params?name=zfpx&age=3
    console.log(url);
    var urls = url.split('?');
    var pathname = urls[0];
    var query = urls[1];
    var queryObj = {};
    if(query){
        var fields = query.split('&');
        fields.forEach(function(fields){
            var vals = fields.split('=');
            queryObj[vals[0]] = vals[1];
        })
    }
    if(pathname =='/'){
        res.setHeader('Content-Type','text/html');
        fs.readFile('./index.html',function(err,data){
            res.end(data);
        })
    }else if(pathname =='/favicon.ico'){
        res.end('404');
    }else if(pathname=='/ajax'){
        res.end('我的ajax加载的内容')
    }else if(pathname =='/params'){
        res.end(JSON.stringify(queryObj));
    }else if(pathname =='/style.css'){
        fs.readFile('./style.css',function(err,data){
            res.end(data)
        })
    }else{
        var filename = '.'+pathname;
        res.setHeader('Content-Type',mime.lookup(filename));
        fs.exists(filename,function(exists){
            if(exists){
                fs.readFile(filename,function(err,data){
                    res.end(data);
                })
            }else{
                res.end('404你访问的路径不存在')
            }
        })
    }

}).listen(8080);