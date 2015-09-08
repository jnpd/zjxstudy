/**
 * Created by Administrator on 2015/9/6.
 */
function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}
Person.prototype.setName = function(){
    this.name = name;
}
Person.prototype.name = '神雕';
module.exports = Person;