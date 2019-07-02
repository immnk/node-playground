// function hello(thing) {
//     console.log(this + " says hello " + thing);
// }

// hello("world");
// hello.call("Mani", "world");

// var person = {
//     name: "Mani",
//     hello: function(thing) {
//         console.log(this.name + " says hello " + thing);
//     }
// }

// person.hello("world");
// person.hello.call({name:"Nag"}, "world");

// var boundHello = function(thing) { return person.hello.call(person, thing); }
// boundHello("world");

// function add(a,b) {
//     console.log(a+b);
// }

// function add2(a) {
//     return (b) => { return a+b}
// }
// add(5,2);
// console.log(add2(5)(2));

function greeting(note) {
    console.log(this.name + " says " + note);
}

greeting("hello");

var person = { name: "Mani" };
// person.greeting = greeting;
greeting.call(person, "helloworld");
// person.greeting("hello");

// var bind = function(func, thisValue) {
//     return function() {
//         func.apply(thisValue, arguments);
//     }
// }

// var boundHello = bind(greeting, person);
// boundHello("hello world");

// var boundHello = person.greeting.bind(person);
// boundHello("new hello wordl");