console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// const sum = (a, b) => {
//     return a + b
// }
// console.log(sum(3,6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// const makeCounter = () => {
//     let count = 1;
//     return function() {
//         return count++;
//     };
// }
// const counter = makeCounter();
// console.log(counter())
// console.log(counter())
// const counter2 = makeCounter();
// console.log(counter2())
// console.log(counter())

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// const makeCounter = (n) => {
//     let count = n;
//     return {
//         increase() {return ++count},
//         decrease() {return --count},
//         reset() {return count = 0},
//         set(x) {return count = x},
//     };
// }
// const counter = makeCounter(5);
// console.log(counter.increase())
// console.log(counter.increase())
// console.log(counter.decrease())
// console.log(counter.reset())
// console.log(counter.set(10))

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// function superSum(n) {
//     if (n === 0) return 0;
//
//     let _arr = [];
//
//     return function helper(...args) {
//         _arr = [..._arr, ...args];
//         if(_arr.length >= n) {
//             _arr.length = n;
//             return _arr.reduce((acc, number) => acc + number)
//         } else {
//             return helper;
//         }
//     }
// }
// console.log(superSum(0))
// console.log(superSum(1)(3))
// console.log(superSum(3)(2)(5)(3))
// console.log(superSum(3)(2)(5,3))
// console.log(superSum(3)(2,5,3))
// console.log(superSum(3)(2,5)(3))
// console.log(superSum(3)(2,5)(3,9))

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// const sumTo = (n) => {
//     if (n === 1) return 1
//     return n + sumTo(n-1)
// }
// console.log(sumTo(4))

// const factorial = (n) => {
//     return n ? n * factorial(n - 1) : 1;
// }
// console.log(factorial(1))
// console.log(factorial(5))

// const fib = (n) => {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// console.log(fib(7))

// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };

// const printList = (list) => {
//     console.log(list.value)
//     if (list.next) {
//         printList(list.next)
//     }
// }
// printList(list)

// const printReverseList = (list) => {
//     if (list.next) {
//         printReverseList(list.next);
//     }
//     console.log(list.value);
// }
// printReverseList(list)

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// const customFlat = (arr) => {
//     return arr.reduce((acc, cur) => {
//         if(Array.isArray(cur)) return acc.concat(customFlat(cur))
//         return [...acc, cur]
//     }, [])
// }
// let arr = [1,2,3,[4,5,[6,7]]]
// console.log(customFlat(arr))

// just a plug
// export default () => {};