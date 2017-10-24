// this function is equal to the second one
function funcOne() {
    const arr = [].slice.call(arguments);
    console.log(arr);
}

function funcTwo(...arguments) {
    // const arr = [].slice.call(arguments);
    console.log(arr);
}

funcOne(1,2,3);
funcTwo(1,2,3);

function sum(a) {
    return function (b) {
        return a + b;
    }
}

const result = sum(1)(2);