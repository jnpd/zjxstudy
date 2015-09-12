/**
 * Created by Administrator on 2015/9/7.
 */
var fs = require('fs');
fs.writeFile('message.txt','hello node',function(err){
   if(err) throw err;
   console.log('It\'s saved')
})