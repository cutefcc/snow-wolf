//1.手写函数柯里化
function curry(func) {
  const len = func.length;
  const fn =
    (p) =>
    (...args) => {
      const params = [...p, ...args];
      if (params.length === len) {
        return func(...params);
      } else {
        return fn(params);
      }
    };
  return fn([]);
}
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));
