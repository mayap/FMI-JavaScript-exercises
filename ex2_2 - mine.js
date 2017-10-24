function compose(...args) {
    const len = args.length;

    return function g(...newParams) {
        const params = parseInt(newParams);

        return g(args[index](params));        
        // for (var index = len - 1; index >= 0; index--) {
            // return g(args[index](params));
            
        // }
    }
}

var addOne = (x) => x + 1;
var sqrt = (x) => x * x;
var log = (x) => console.log(x);

addOneSqrtAndPrint = compose(log, sqrt, addOne);

addOneSqrtAndPrint(1); // 4
addOneSqrtAndPrint(2); // 9
addOneSqrtAndPrint(3); // 16