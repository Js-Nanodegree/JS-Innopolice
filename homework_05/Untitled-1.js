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

// 10. Создать объект, выводящий в консоль все ключи и значения объекта в формате "ключ: значение" через запятую (считать, что значением ключа объекта не может быть объектом или массивом, содержащими объекты) сама функция в консоль выводиться не должна.

// 11. Создать функцию-конструктор для объекта, содержащего методы serProp (установить значение свойства), метод принимает ключь (строка), значение (произвольное) и объект со свойствами writable, configurable, enumerable (разрешение перезаписи свойства, разрешение перечисления свойства и разрешение удаления свойства). Если какое-то из свойств в объекте отсутствует, действие должно быть разрешено
