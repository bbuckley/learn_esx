'use strict';

var obj = {
    prop: 'Hello',
    sayHello: function sayHello() {
        console.log(this.prop);
    }
};

obj.sayHello(); // Logs "Hello"

var reference = obj.sayHello;
var c = reference.bind(obj);
c(); // logs "undefined"

var newFunction = obj.sayHello.bind(obj);
newFunction(); // logs "Hello"