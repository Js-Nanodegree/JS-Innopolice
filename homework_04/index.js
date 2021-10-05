// const { text } = require("express");
const text = {
  str1: false,
  str2: false,
};

const select_Func = {
  equalsSelect() {
    // 1. Написать скрипт, предлогающий пользователю ввести две строки через запятую.
    // Вывести сообщение true, если вторая строка содержится в первый,
    // в противном случае false,
    // регистр при проверке не учитывать.
    if (this?.str1) {
      return text.str1;
    }
    if (this?.str2) {
      return text.str2;
    }
    return this.str2.includes(this.str1);
  },
  splitStr() {
    // 2. Пользователь вводит строку,
    // затем число(кол - во символов).
    // Функция усекает строку до кол - ва символов
    // и добавляет многоточие.
    if (!Number(this.num)) return this.str1;
    if (this.str1.length < Number(this.num)) {
      return this.str1.substring(0, this.str1.length) + "...";
    }

    return this.str1.substring(0, Number(this.num)) + "...";
  },
  validateFemale() {
    // 5. Написать функцию,
    // валидирующую ФИО из кирилличиских символов
    // (считать, что отчество может оканчиваться только на "вна" или "вич"
    // или поле отчества может отсутствовать)

    const middle = this?.name?.middle;
    if (this.str1.length < 3) {
      return false;
    }
    if (!middle) {
      return;
    }
    const lastSliceStr = middle.substring(middle.length - 3, middle.length);

    return ["вич", "вна"].includes(lastSliceStr);
  },
  sliceAndUpdate() {
    // На вход дана строка в PamalCase,
    // преобразовать строку в snake_case
    let result = "";

    for (let value of this.entry) {
      if (/^[A-Z]*$/.test(value)) {
        if (value === this.entry[0]) {
          result += value.toLowerCase();
        } else {
          result += "_" + value.toLowerCase();
        }
      } else {
        result += value;
      }
    }
    return result;
  },
  integerSlice() {
    let result = "";
    // 7. На вход дана строка,
    // вернуть через alert
    //все числа(десятичные разделяются сиволом ".")

    for (let value of this.integerStr) {
      if (Number(value)) {
        result += value.toLowerCase() + ".";
      } else {
        result += value;
      }
    }
    return result;
  },
  selectMask() {
    // 8. Валидация введённого значения.
    // Вводится идентификатор документа.
    // Идентификатор должен состоять из четырёх частей по четыре символа,
    // разделённых или не разделённых знаком "-".
    // Допускаются только символы латинского алфавита и числа.
    // Вывести через alert "ведётся поиск", при соответствии введённого значения,
    // или "неверный илентификатор", при несоответствии.
    // При несоответствии снова вывести форму для ввода строки.

    let result = "";

    for (let value of this.document) {
      if (/^[a-zA-Z0-9]+$/.test(value)) {
        console.log(value);
        result += value;
      }
      if (value === " ") {
        result += value;
      }
    }

    const splitStr = result.split(" ");
    if (splitStr.length !== 4) {
      return false;
    }
    const uniqValue = Array.from(
      new Set(splitStr.map((x) => x.length))
    ).toString();
    if (uniqValue != 4) {
      return false;
    }
    return true;
  },
  formatDate() {
    // 4. Написать функцию, преобразующее строку с датой и временем формата
    // '12/02/2021 12-00' в строку формата 12.02.2021 12: 00,
    // используя регулярные выражения

    let result = "";
    for (let value of str) {
      if (value == "/") {
        result += "-";
      }
      if (value === "-") {
        result += ":";
      }
      if (value != "/" && value != "-") {
        result += value;
      }
    }

    if (new Date(result).getDate()) {
      return result;
    }
    return false;
  },
};

const Initialize = {
  str1: "Slava,Yakimov",
  num: "3",
  integerStr: "dsafd2132v123dcs213",
  entry: "PamalCase",
  name: {
    name: "Slava",
    last: "Yakimov",
    middle: "Александрович",
  },
  document: "12_32 312-3 as-df 1:423",
};

const eqwe = Object.assign(Initialize, select_Func, {
  str1: "Slava,Yakimov Александрович",
});

// 6. На вход даётся многострочная строка, найти и вернуть через alert все html комментарии
