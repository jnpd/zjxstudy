/**
 * Created by Administrator on 2015/9/7.
 */
var buf1 = new Buffer(12);
buf1.fill(0x0f,1,3);
console.log(buf1);

var buf2 = new Buffer([1,2,3]);
console.log(buf2)

var buf3= new Buffer('珠峰培训');
console.log(buf3.toString());

var str = "珠峰培训";
var buf = new Buffer(str);
console.log(str.length);
console.log(buf.length);

str[0] ="我";
buf[0]="0xff";
console.log(str.length);
console.log(buf.length);

var subs = str.slice(1,2);
var subb = buf.slice(1,2);
subb[0]=0x9;
console.log(subs);
console.log(subb)

var buf4 = new Buffer('珠峰培训');
console.log(buf4.toString('utf8',3,9))

var buf5 = new Buffer(12);
buf5.write('珠峰',0,3);
buf5.write('培训',3,3);
console.log(buf5.toString())

var buff1 = new Buffer('珠峰');
var buff2 = new Buffer('培训');
console.log(Buffer.concat([buff1,buff2],12));

var buff3 = new Buffer(6);
buff2.copy(buff3,0,0,6);
console.log(buff3.toString())

console.log(buff3 instanceof Object);
console.log(Buffer.isBuffer(buff3));
console.log(Buffer.isEncoding('UTF8'))