function hello(thing) {
    console.log(this + " says hello " + thing);
}

hello("world");
hello.call("Mani", "world");