"use strict";
const index = [0, 1, 2, 3, 4, 5, 6, 7];

const ctx = [
  {
    index: 1,
    initial: { str1: "12/22/2000 12-00", str2: "12/22/2000 12-00" },
    text: `
  1. . Написать скрипт, 
  предлогающий пользователю ввести две строки через запятую. 
  Вывести сообщение true, если вторая строка содержится в первый, 
  в противном случае false, 
  регистр при проверке не учитывать.
  `,
    input: [
      {
        id: 1,
        name: "str1",
      },
    ],
    result(state) {
      const data = state.str1.split(",");
      let str1 = data[0] || "";
      let str2 = data[1] || "";

      if (str1 == "") {
        return false.toString();
      }
      if (str2 == "") {
        return false.toString();
      }

      return str2.includes(str1).toString();
    },
  },
  {
    index: 2,
    initial: { date: "12/22/2000 12-00", numeric: "5" },
    num: 4,
    text: `
  2.  Пользователь вводит строку, 
  затем число (кол-во символов). 
  Функция усекает строку до кол-ва 
  символов и добавляет многоточие.
  `,
    input: [
      {
        id: 1,
        name: "date",
      },
    ],
    result(state) {
      const result = state.date;
      const data = state.date.split(" ");

      const num = Number(data[1]);
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
    /// TODO
    4. Написать функцию, 
    преобразующее строку с датой и 
    временем формата '12/02/2021 12-00' 
    в строку формата 12.02.2021 12:00, 
    используя регулярные выражения
  `,
    input: [
      {
        id: 1,
        name: "date",
      },
    ],
    result(state) {
      const date = state.date || "";

      return date.replace(/-/gi, ":").replace(/\/ /gi, "-");
    },
  },
  {
    index: 5,
    initial: { last: "Якимов Вячеслав Googleвич" },
    text: `
    5. Написать функцию, валидирующую ФИО 
    из кирилличиских символов 
    (считать, что отчество может оканчиваться только 
    на "вна" или "вич" или может отсутствовать)
  `,
    input: [
      {
        id: 1,
        name: "last",
      },
    ],
    result(state) {
      const split = state.last.split(" ");
      let middle = split[2] || "";
      let last = split[0];
      let first = split[1];
      console.log(middle);

      if (middle == "") {
        return `${last} ${first}`;
      }
      if (middle.length < 3) {
        return `${last} ${first}`;
      } else {
        const lastSliceStr = middle.substring(middle.length - 3, middle.length);

        if (["вич", "вна"].includes(lastSliceStr)) {
          return `${last} ${first} ${middle}`;
        }
        return `${last} ${first}`;
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
        }
      }
      return result;
    },
  },
  {
    index: 6,
    initial: {
      html: `
    <body class=" login" data-admin-utc-offset="0">
    
    <!-- Container -->
    <div id="container">
    
        
    <!-- Header -->
        <div id="header">
            <div id="branding">
            
    <h1 id="site-name"><a href="/admin/">Django administration</a></h1>
    
            </div>
            
            
        </div>
    <!-- END Header -->
        
        
    
        
            
        
    
        <!-- Content -->
        <div id="content" class="colM">
            
            
            
    
    
    
    
    <div id="content-main">
    
    
    
    <form action="/admin/login/?next=/admin/" method="post" id="login-form"><input type="hidden" name="csrfmiddlewaretoken" value="2C1TjdJVO7t0y0QnfF6VVmia7CW5RKCtUIrvxcHdo3DtLUCznx6wffPriVahTXwh">
      <div class="form-row">
        
        <label class="required" for="id_username">Username:</label> <input type="text" name="username" autofocus="" autocapitalize="none" autocomplete="username" maxlength="150" required="" id="id_username">
      </div>
      <div class="form-row">
        
        <label class="required" for="id_password">Password:</label> <input type="password" name="password" autocomplete="current-password" required="" id="id_password">
        <input type="hidden" name="next" value="/admin/">
      </div>
      
      
      <div class="submit-row">
        <label>&nbsp;</label><input type="submit" value="Log in">
      </div>
    </form>
    
    </div>
    
            
            <br class="clear">
        </div>
        <!-- END Content -->
    
        <div id="footer"></div>
    </div>
    <!-- END Container -->
    
    
    
    </body>`,
    },
    text: `
    6. На вход даётся многострочная строка,
    найти и вернуть через alert все html комментарии
    `,
    input: [
      {
        id: 1,
        name: "html",
      },
    ],
    result(state) {
      return state.html.match(/<!-- (.*?) -->/gs).toString();
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
