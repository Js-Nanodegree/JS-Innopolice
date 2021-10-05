"use strict";
const index = [0, 1, 2, 3, 4, 5, 6];

const ctx = [
  {
    index: 1,
    initial: { str1: "12/22/2000 12-00", str2: "12/22/2000 12-00" },
    text: `
  1. Пользователь вводит строку,
  затем число(кол - во символов).
  Функция усекает строку до кол - ва символов
  и добавляет многоточие.
  `,
    input: [
      {
        id: 1,
        name: "str1",
      },
      {
        id: 2,
        name: "str2",
      },
    ],
    result(state) {
      let str1 = state.str1 || "";
      let str2 = state.str2 || "";

      if (str1 == "") {
        return false;
      }
      if (str2 == "") {
        return false;
      }

      return str2.includes(str1).toString();
    },
  },
  {
    index: 2,
    initial: { date: "12/22/2000 12-00", numeric: "5" },
    num: 4,
    text: `
  2. Пользователь вводит строку,
  затем число(кол - во символов).
  Функция усекает строку до кол - ва символов
  и добавляет многоточие.
  `,
    input: [
      {
        id: 1,
        name: "date",
      },
      {
        id: 2,
        name: "numeric",
      },
    ],
    result(state) {
      const result = state.date;
      const num = Number(state.numeric);
      if (!Number(num)) return result;
      if (result.length < Number(num)) {
        return result.substring(0, result.length) + "...";
      }

      return result.substring(0, Number(num)) + "...";
    },
  },
  {
    index: 4,
    initial: { date: "12/22/2000 12-00", numeric: "5" },
    num: 4,
    text: `
    4. Написать функцию, преобразующее строку с датой и временем формата
    '12/02/2021 12-00' в строку формата 12.02.2021 12: 00, используя
    регулярные выражения
  `,
    input: [
      {
        id: 1,
        name: "date",
      },
    ],
    result(state) {
      const date = state.date || "";
      let result = "";
      for (let value of date) {
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
  },
  {
    index: 5,
    initial: { last: "Якимов", first: "Вячеслав", middle: "Александрович" },
    text: `
    5. Написать функцию,
валидирующую ФИО из кирилличиских символов
(считать, что отчество может оканчиваться только на "вна" или "вич"
или поле отчества может отсутствовать)
  `,
    input: [
      {
        id: 1,
        name: "last",
      },
      {
        id: 2,
        name: "first",
      },
      {
        id: 3,
        name: "middle",
      },
    ],
    result(state) {
      const middle = state.middle;
      if (middle == "") {
        return true;
      }
      if (middle.length < 3) {
        return false;
      } else {
        const lastSliceStr = middle.substring(middle.length - 3, middle.length);

        if (["вич", "вна"].includes(lastSliceStr)) {
          return `${state.last} ${state.first} ${state.middle}`;
        }
        return `${state.last} ${state.first}`;
      }
    },
  },
  {
    index: 6,
    initial: { str: "ПриветМир" },
    num: 4,
    text: `
    6. На вход дана строка в PamalCase,
преобразовать строку в snake_case
  `,
    input: [
      {
        id: 1,
        name: "str",
      },
    ],
    result(state) {
      const str = state.str || "";
      let result = "";

      for (let value of str) {
        if (value === str[0]) {
          result += value.toLowerCase();
        } else {
          if (/^[A-ZА-Я]*$/.test(value)) {
            result += "_" + value.toLowerCase();
          } else {
            result += value.toLowerCase();
          }
        }
      }
      return result;
    },
  },
  {
    index: 7,
    initial: { numeric: "dsafd2132v123dcs213" },
    num: 4,
    text: `
    7. На вход дана строка,
    вернуть через alert
   все числа(десятичные разделяются сиволом ".")
  `,
    input: [
      {
        id: 1,
        name: "numeric",
      },
    ],
    result(state) {
      const str = state.numeric || "";
      let result = "";

      for (let value of str) {
        if (Number(value)) {
          result += value.toLowerCase() + ".";
        } else {
          result += value;
        }
      }
      return result;
    },
  },
  {
    index: 8,
    initial: { document: "12_32 312-3 as-df 1:423" },
    text: `
    8. Валидация введённого значения.
    Вводится идентификатор документа.
    Идентификатор должен состоять из четырёх частей по четыре символа,
    разделённых или не разделённых знаком "-".
    Допускаются только символы латинского алфавита и числа.
    Вывести через alert "ведётся поиск", при соответствии введённого значения,
    или "неверный илентификатор", при несоответствии.
    При несоответствии снова вывести форму для ввода строки.
  `,
    input: [
      {
        id: 1,
        name: "document",
      },
    ],
    result(state) {
      const str = state.document || "";
      let result = "";

      for (let value of str) {
        if (/^[a-zA-Z0-9]+$/.test(value)) {
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
      return result;
    },
  },
];

class SecondComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = ctx[this.props.idx].initial;
  }

  render() {
    const returnInt = (element) => {
      const data = {
        ...element,
        value: this.state[element.name] || "",
        onChange: (e) => {
          let path = { [element.name]: e.target.value };
          this.setState({ ...this.state, ...path });
        },
      };

      return (
        <div>
          <p>{element.name}</p>
          <input key={this.props.idx + element.name + "_input"} {...data} />
        </div>
      );
    };

    return (
      <div className="question_card">
        <div className="question_card__header">
          <h2>Задание:</h2>
          <p>{ctx[this.props.idx].text}</p>
        </div>
        <div className="question_card__input">
          {ctx[this.props.idx].input.map(returnInt)}
        </div>
        <div className="question_card__result">
          <h3>Result</h3>
          {ctx[this.props.idx].result(this.state)}
        </div>
      </div>
    );
  }
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: "12/22/2000 12-00" };
  }
  render() {
    const returnInt = (element) => {
      return <SecondComp key={element + "_Comp"} idx={element} />;
    };

    return <div>{index.map(returnInt)}</div>;
  }
}

const domContainer = document.querySelector("#index");
ReactDOM.render(React.createElement(LikeButton), domContainer);
