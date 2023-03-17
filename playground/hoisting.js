// sayHi() calling a function before it's defined is what is known as hoisting

function sayHi() {
    console.log('hey!')
    console.log(add(10, 2))
}

function add(a, b) {
    return a + b
}