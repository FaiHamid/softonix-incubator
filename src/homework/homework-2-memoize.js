// Реалізуйте функцію дизайн паттерну memoize яка кешує виконання виклику з одинаковими аргументами
// та при повторному виклику лише повертає вже закешований результат.

// я змінила функцію sum на multiply, щоб можна було перевірити результат.
function multiply (a, b) { return a * b } // for test

// eslint-disable-next-line
function memoize (fn) {
  const cacheArgs = {}

  return function (...args) {
    const key = JSON.stringify(args)

    if (!cacheArgs[key]) {
      cacheArgs[key] = fn(...args)
    }
    return cacheArgs[key]
  }
}

// приклад виконання вашого коду
const multiplyMemoized = memoize(multiply)

console.time('multiplyMemoized1')
console.log(multiplyMemoized(100003254352, 3235563466364))
console.timeEnd('multiplyMemoized1') // результат 3.235668762988379e+23

console.time('multiplyMemoized2')
console.log(multiplyMemoized(3, 3)) // результат 9
console.timeEnd('multiplyMemoized2')

console.time('multiplyMemoized3')
console.log(multiplyMemoized(100003254352, 3235563466364)) // результат 3.235668762988379e+23, відбулось повторне виконання, результат повернуто з кешу без виклику додавання
console.timeEnd('multiplyMemoized3')
