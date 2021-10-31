// Реализовать объект animal,
// с полем клички,
// методом eat,
// выводящим сообщение "/*кличка*/ ест"
// и методом say, выводящим фразу,
// "неизвестное животное молчит",
// путём прототипного наследования
// создать объекты кота,
// собаки и попугая.
// Переопределить в них метод say, в зависимости от типа животного.
// Для кота добавить новый метод hunt,
// выводящий сообщение "/*кличка*/ охотится".
// Все перечисленные методы и свойства должны быть защищены от удаления и перезаписи.
// Методы должны быть неперечисляемыми.
// Разработать метод rename, для смены клички животного.
// Новая кличка должна содержать только кирилические символы,
// пробелы или символ "-".
// Выполнить то же самое использую функции конструкторы.
// Выполнить то же самое, используя классы.

const Init= {
  rename(input) {
      if (/[а-яА-ЯёЁ0-9]+ */g.test(input)) {
          return (this._nickname = input);
      }
  },
  _eat() {
      return `${this._nickname} ест`;
  },
  init() {
      let data = [];
      data.push(this._eat());

      return data;
  }
}

const Cat ={
  proto:__Init__,
  _say() {
      return "кошка мяучит: Mяу - Mяу";
  },
  _hunt() {
      return `${this._nickname} охотиться`;
  },
  init() {
      let data = [];
      data.push(this._say());
      data.push(this._eat());
      data.push(this._hunt());
      return data;
  }
}


class Dog extends Init {
  constructor(nickname) {
      super(nickname);
      this._nickname = nickname;
      this.init();
  }
  _say() {
      return "собака лает: Гав - Гав";
  }
  init() {
      let data = [];
      data.push(this._eat());
      data.push(this._say());
      return data;
  }
}

class Parrot extends Init {
  constructor(nickname) {
      super(nickname);
      this._nickname = nickname;
      this.init();
  }
  _say() {
      return "попугай шебечет: Попка-дурак";
  }
  init() {
      let data = [];
      data.push("Попугай по имени "+this._nickname);
      data.push(this._say());
      return data;
  }
}

const in_Cat = new Cat("Slava");
const in_Dog = new Dog("Slava");
const in_Parrot = new Parrot("Slava");
console.log(Cat("Slava").init());
console.log(in_Dog.init());
console.log(in_Parrot.init());
in_Cat.rename("Уфыв");
in_Dog.rename("Уфыв");
in_Parrot.rename("Уфыв");
console.log(in_Cat.init());
console.log(in_Dog.init());
console.log(in_Parrot.init());
