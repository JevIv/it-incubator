"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lesson_8_1 = require("./lesson_8");
test("sum", function () {
    expect((0, lesson_8_1.sum)(3, 5, 7, 6, 4, 9)).toBe(34);
    expect((0, lesson_8_1.sum)(1, 1, 1, 6)).toBe(9);
});
test("get Triangle Type", function () {
    expect((0, lesson_8_1.getTriangleType)(1, 1, 1)).toBe("10");
    expect((0, lesson_8_1.getTriangleType)(2, 3, 3)).toBe("01");
    expect((0, lesson_8_1.getTriangleType)(3, 3, 2)).toBe("01");
    expect((0, lesson_8_1.getTriangleType)(4, 5, 3)).toBe("11");
    expect((0, lesson_8_1.getTriangleType)(10, 2, 2)).toBe("00");
});
test("get Sum ", function () {
    expect((0, lesson_8_1.getSum)(1000)).toBe(1);
    expect((0, lesson_8_1.getSum)(0)).toBe(0);
    expect((0, lesson_8_1.getSum)(1234)).toBe(10);
    expect((0, lesson_8_1.getSum)(9999)).toBe(36);
});
test("is Even Sum Greater", function () {
    expect((0, lesson_8_1.isEvenIndexSumGreater)([1, 100, 2, 200])).toBe(false);
    expect((0, lesson_8_1.isEvenIndexSumGreater)([100, 1, 200, 2])).toBe(true);
    expect((0, lesson_8_1.isEvenIndexSumGreater)([100, 1, 200, 2, 300, 4])).toBe(true);
    expect((0, lesson_8_1.isEvenIndexSumGreater)([100, 1, 200, 2, 4])).toBe(true);
});
test("get Square Only Of Positive Integers", function () {
    var array = [4, 5.6, -9.8, 3.14, 10, 6, 8.34, -2];
    var len = array.length;
    var result = (0, lesson_8_1.getSquarePositiveIntegers)(array);
    expect(result === array).toBe(false);
    expect(array.length).toBe(len);
    expect(result.length).toBe(3);
    expect(result[0]).toBe(16);
    expect(result[1]).toBe(100);
    expect(result[2]).toBe(36);
});
test("sum of first N numbers", function () {
    expect((0, lesson_8_1.sumFirstNumbers)(0)).toBe(0);
    expect((0, lesson_8_1.sumFirstNumbers)(4)).toBe(10);
    expect((0, lesson_8_1.sumFirstNumbers)(10)).toBe(55);
});
test("get banknote list", function () {
    // надо бы проверять длинну резалтов и их сумму
    var result2500 = (0, lesson_8_1.getBanknoteList)(2500);
    var result23 = (0, lesson_8_1.getBanknoteList)(23);
    expect(result2500[0]).toBe(1000);
    expect(result2500[1]).toBe(1000);
    expect(result2500[2]).toBe(500);
    expect(result23[0]).toBe(20);
    expect(result23[1]).toBe(2);
    expect(result23[2]).toBe(1);
});
