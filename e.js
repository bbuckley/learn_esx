
const obj = {
    prop: 'Hello',
    sayHello: function() {
        console.log( this.prop )
    }
}


obj.sayHello() // Logs "Hello"

const reference = obj.sayHello
const c = reference.bind(obj)
c() // logs "undefined"


var newFunction = obj.sayHello.bind(obj)
newFunction() // logs "Hello"
var x = [1,2,3]
console.log(x);
