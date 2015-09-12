/**
 * Created by Administrator on 2015/9/7.
 */
var fs = require('fs');

fs.writeFile('./write.txt',new Buffer('i am first line  '),{encoding:'utf8',flag:'xa'},function(err){
  console.log('xiexieie')
})

fs.writeFile('./write.txt','i am first two line',{encoding:'utf8',flag:'a'},function(err){
   console.log('写入完毕')
})