// Домашнее задание:

// 1. На вход поступает массив, вывести массив, удалив неуникальные значения.
const data = [1, 2, 34, 2, 5, 2, 9, 4, 15];
console.log([...new Set(data)]);

// 2. На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать.

let array = [];
for (var i = data.length - 1; i >= 0; i--) {
  array.push(data[i]);
}

console.log(array);

// 3. На вход поступает массив, содержащий массивы, в которых хранится два элемента. 
// Преобразовать массив в объект, где ключами являются нулевой индекс 
// вложенныхых массивов, а значениями являются элементы с индексом один.

const objArr = [
  [1, 2],
  [3, 5],
];
console.log(objArr.map((x) => ({ [x[0]]: x[1] })));

// 4. На вход поступает объект, вывести сумму числовых свойств объекта.

console.log(
  data.reduce((previousValue, currentValue) => previousValue + currentValue)
);

// 5. На вход поступает массив с числами, вывести среднее арифметическое элементов массива.
console.log(
  data.reduce((previousValue, currentValue) => previousValue + currentValue) /
    data.length
);

// 6. Создать функцию-конструктор для объекта "калькулятор",
// объект должен иметь поле, хранящее текущее значение
// и методы сложения, вычитания, умножения и деления,
// принимающие число и манипулирующий свойством значения в соответствии с назначением метода,
// а так же функцию, сбрасывающую значение в ноль.

let instrument = [0];

const calc = {
  sum(data = 0, input) {
    instrument.push("+");
    instrument.push(input);
    return data + input;
  },
  reduce(data = 0, input) {
    instrument.push("-");
    instrument.push(input);
    return data - input;
  },
  prod(data = 0, input) {
    instrument.push("*");
    instrument.push(input);
    return data * input;
  },
  division(data = 0, input) {
    instrument.push("/");
    instrument.push(input);
    return data / input;
  },
  init() {
    instrument = [0];

    return 0;
  },
};

data = calc.sum(14, 12);
console.log(data);
console.log(instrument);
data = calc.prod(data, 4);
console.log(data);
console.log(instrument);
data = calc.division(data, 6);
console.log(data);
console.log(instrument);
data = calc.reduce(data, 6);
console.log(data);
console.log(instrument);
data = calc.init(data);
console.log(data);
console.log(instrument);

// 7. Функция принимает смешанный массив (содержащий значения чисел, строк и объектов), 
// вернуть объект с полями numbers, strings и objects, 
// содержащими массив со значениями, соответствующими названию поля.

const seven = ["ябав", "dafdsa", 1, 3, 5, { data: "cus" }];
let numeric = [];
let object = [];
let string = [];

for (var i = seven.length - 1; i >= 0; i--) {
  const res = seven[i];
  if (Number(res)) {
    numeric.push(res);
  }
  if (typeof res === "string") {
    string.push(res);
  }
  if (typeof res === "object") {
    object.push(res);
  }
}

console.log({ numeric, object, string });

// 8. Функция принимает массив чисел и два числовых значения, вернуть новый массив, 
// содержащий элементы первого массива, значение которых попадает под диапазон переданных в 
// функцию чисел (второе переданное число может быть больше первого)

const incDiap = [5, 17];

let result = [];
for (var i = data.length - 1; i >= 0; i--) {
  const qwe = data[i];
  const diap = incDiap.sort(function (a, b) {
    return a - b;
  });
  if (diap[0] <= qwe && qwe < diap[1]) {
    result.push(qwe);
  }
}

console.log(result);

// 9. Функция принимает две строки. 
// Вывести true, если строки являются анаграммами, в противном случае false
const str = ["день", "ьнед"];

const strArr = (data, side) => {
  let str1 = [...new Set(data)];

  if (side) {
    str1 = str1.reverse();
  }
  return str.toString();
};

console.log(strArr(str[0]) === strArr(str[1], true));

// 10. Создать объект, выводящий в консоль все ключи и значения объекта в формате "ключ: значение"
// через запятую (считать, что значением ключа объекта не может быть объектом или массивом, содержащими объекты) 
//сама функция в консоль выводиться не должна.
const data = [1, 2, 3, 5, 6, 4, 3, 2];
let dad = [];

data.forEach((a, index) => {
  dad.push([index, a]);
});
console.log(dad);



// 11. Создать функцию-конструктор для объекта, содержащего методы serProp (установить значение свойства), 
// метод принимает ключь (строка), значение (произвольное) и объект со свойствами writable, configurable, 
// enumerable (разрешение перезаписи свойства, разрешение перечисления свойства и разрешение удаления свойства). 
// Если какое-то из свойств в объекте отсутствует, действие должно быть разрешено
