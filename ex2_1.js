function curry(func) {
    const len = func.length;

    return function g(...args) {
        if (len === args.length) {
            return func(...args);
        }

        return function(...newParams) {
            const newArgs = args.concat(newParams);
            return g(...newArgs);
        }
    } 
}

function trippleAdd(a, b, c) {
    return a + b + c;
}

let result = curry(trippleAdd);

console.log(result(1, 2, 3));
console.log(result(1, 2)(3));
console.log(result(1)(2)(3));