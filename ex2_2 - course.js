function compose(...params) {
    return function (x) {
        return params.reduceRight(function (result, func) {
            return func(result);
        }, x);
    }
}

var addOne = (x) => x + 1;
var sqrt = (x) => x * x;
var log = (x) => console.log(x);

addOneSqrtAndPrint = compose(log, sqrt, addOne);

addOneSqrtAndPrint(1); // 4
addOneSqrtAndPrint(2); // 9
addOneSqrtAndPrint(3); // 16