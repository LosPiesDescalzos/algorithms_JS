describe("pow", function() {
    it("возводит в степень n", function() {
        assert.equal(pow(2, 3), 8);
        assert.equal(pow(3, 3), 27);
        assert.equal(pow(1, 3), 1);
        assert.equal(pow(4, 2), 16);
    });
});

describe("fib", function() {
    it("выводит число фибоначи по номеру", function() {
        assert.equal(fib(4), 3);
        assert.equal(fib(1), 1);
        assert.equal(fib(7), 13);
    });
});

describe("prime_factors", function() {
    it("раскладывает число на простые множители", function() {
        assert.equal(prime_factors(10), '2,5');
        assert.equal(prime_factors(777), '3,7,37');
        assert.equal(prime_factors(69), '3,23');
    });
});

describe("quadratic_equation", function() {
    it("решает квадратные уравнения", function() {
        assert.equal(quadratic_equation(1, 2, -3), -3, 1);
        assert.equal(quadratic_equation(7, 7, 7), null, null);
        assert.equal(quadratic_equation(1, -6, 9), null, 3);
    });
});

describe("abs", function() {
    it("возвращает модуль числа", function() {
        assert.equal(abs(6), 6);
        assert.equal(abs(0), 0);
        assert.equal(abs(-6), 6);
    });
});

describe("point_logic", function() {
    it("анализ принадлежности точки отрезку", function() {
        assert.equal(point_logic(2,5,3), true);
        assert.equal(point_logic(2,5,8), false);
        assert.equal(point_logic(2,5,-3), false);
    });
});

describe("swap", function() {
    it("меняет местами значения массива", function() {
        let arr1 = [1, 2, 3, 4, 5, 6, 7];
        let answer1 = [1, 4, 3, 2, 5, 6, 7];
        assert.equal(swap(arr1,1,3).toString(), answer1.toString());

        let arr2 = [1, 2, 3, 4, 5, 6, 7];
        let answer2 = [1, 2, 7, 4, 5, 6, 3];
        assert.equal(swap(arr2,2,6), answer2.toString());
    });
});

describe("isPalindrome", function() {
    it("проверка на палиндром", function() {
        assert.equal(isPalindrome("1221"), true);
        assert.equal(isPalindrome("1223"), false);
        assert.equal(isPalindrome("топот"), true);
        assert.equal(isPalindrome("деда"), false);
    });
});

describe("reverseString", function() {
    it("вывод строки с последнего элемента", function() {
        let arr1 = [1, 2, 3, 4, 5, 6, 7];
        let answer1 = [7, 6, 5, 4, 3, 2, 1];
        assert.equal(reverseString(arr1.toString()), answer1.toString());

        let arr2 = "kate";
        let answer2 = "etak";
        assert.equal(reverseString(arr2), answer2);
    });
});

describe("findMinMax", function() {
    it("нахождение минимума и максимума", function() {
        let arr1 = [1, 2, 3, 4, 5, 6, 7];
        assert.equal(findMinMax(arr1).toString(), [1,7].toString());

        let arr2 = ["b", "c", "d", "g", "e", "k", "w"];
        assert.equal(findMinMax(arr2).toString(), ["b","w"].toString());
    });
});

describe("linearSearch", function() {
    it("поиск по массиву", function() {
        let array = ["kate", "dima", "pasha", "ivan"]
        assert.equal(linearSearch("kate", array), 0);
        assert.equal(linearSearch("pasha", array), 2);
        assert.equal(linearSearch("ivan", array), 3);
    });
});

describe("iterationBinarySearch", function() {
    it("итерационный бинарный поиск", function() {
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        assert.equal(iterationBinarySearch(array, 7), 6);
        let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        assert.equal(iterationBinarySearch(array2, 7), 6);
        let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        assert.equal(recursiveBinarySearch(array3, 10), 9);
        let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        assert.equal(recursiveBinarySearch(array4, 1), 0);
    });
});

describe("recursiveBinarySearch", function() {
    it("рекурсивный бинарный поиск", function() {
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        assert.equal(recursiveBinarySearch(array, 7), 6);
        let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        assert.equal(iterationBinarySearch(array2, 7), 6);
        let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        assert.equal(recursiveBinarySearch(array3, 10), 9);
        let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        assert.equal(recursiveBinarySearch(array4, 1), 0);
    });
});

describe("convert_to_roman", function() {
    it("перевод в римскую систему", function() {
        assert.equal(convert_to_roman(123), 'CXXIII');
        assert.equal(convert_to_roman(10), 'X');
        assert.equal(convert_to_roman(1457), 'MCDLVII');
    });
});

