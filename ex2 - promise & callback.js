// 1

// function asyncSum(a, b) {
//     setTimeout(function() {
//         console.log(a + b);
//     }, 0);
// }

// asyncSum(4, 5);
// console.log('Hello!');

// 2

// function asyncSum(a, b, cb) {
//     setTimeout(function() {
//         cb(a + b);
//     }, 1000);
// }

// asyncSum(4, 5, function (res) {
//     console.log(res);
// });
// console.log('Hello!');

// 3

// function pAsyncSum(a, b) {
//     return new Promise(function (resolve) {
//         setTimeout(function() {
//             resolve(a + b);
//         }, 0);
//     })
// }

// pAsyncSum(4, 5).then((res) => console.log(res));

// 4

// function something(...params) {
//     return {
//         then: function () {
//             console.log(params);
//         }
//     }
// }

// something(1, 2, 3).then();

// 5 - our own constructor function Promise

function Promis(func) {
    // this.func = func;

    this.then = function (next) {
        return next(func());
    }
}

function something(a, b) {
    return new Promis(function () {
        return a + b;
    })
}

something(1, 2).then(res => res + 1);