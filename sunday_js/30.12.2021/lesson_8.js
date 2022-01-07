"use strict";
// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBanknoteList = exports.sumFirstNumbers = exports.getSquarePositiveIntegers = exports.isEvenIndexSumGreater = exports.getSum = exports.getTriangleType = exports.sum = void 0;
function sum() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    console.log(nums);
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return 123;
}
exports.sum = sum;
// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.
function getTriangleType(a, b, c) {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return "";
}
exports.getTriangleType = getTriangleType;
// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа
function getSum(number) {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return 123;
}
exports.getSum = getSum;
// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.
var isEvenIndexSumGreater = function (arr) {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return true;
};
exports.isEvenIndexSumGreater = isEvenIndexSumGreater;
// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.
function getSquarePositiveIntegers(array) {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return [];
}
exports.getSquarePositiveIntegers = getSquarePositiveIntegers;
// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.
function sumFirstNumbers(N) {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return 0;
}
exports.sumFirstNumbers = sumFirstNumbers;
// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено
function getBanknoteList(amountOfMoney) {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return [1];
}
exports.getBanknoteList = getBanknoteList;
