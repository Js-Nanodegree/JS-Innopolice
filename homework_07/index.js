// 1. Реализовать функцию, принимающую число (индекс в последовательности Фибоначчи), 
// функция должна вернуть значение числа. 
// Использовать рекурсию.

// Получить 8 индекс из порядка чисел фибоначи

const fibonacciIndex = (index) => {
    let i;
    let fib = []; // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= index; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[index]
}

console.log(fibonacciIndex(12))


// 2. Модернизировать написанную функцию, 
// добавив кэширование (функция “”запоминает”” входной параметр и вычесленное значение,
// при следующем вызыве с этим же параметром, функция не вычисляет значение, а возвращает из памяти)

let carry = {}

const fibonacciIndex = (index) => {
    if (carry[index]) {
        return carry[index]
    }
    let i;
    let fib = []; // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= index; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    carry[index] = fib[index]
    return fib[index]
}

console.log(fibonacciIndex(12))
console.log(carry)
console.log(fibonacciIndex(5))
console.log(carry)
console.log(fibonacciIndex(12))

// TODO


// 3. Разработать рекурсивную функцию, принимающую массив, содержащий массивы из двух элементов, 
// в каждом из которых первый элемент является строкой, 
// а второй строкой, числом, логическим значением, объектом, 
// или таким же массивом. Функция должна преобразовать массив в объект.
// Пример входного значения:[[“name”: “Anna”], [“age”: 22],[“pets”: [[“dog”: “Faust”],[“cat”: “Balthazar”]]]]
// Пример возвращаемого объекта:{namee: “Anna”,age: 22,pets: {dog: “Faust”,cat: “Balthazar”}}