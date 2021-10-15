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

const Init = {
  _nickname: "Slava",
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
  },
};

const Cat = {
  proto: Init,
  _say() {
    return "кошка мяучит: Mяу - Mяу";
  },
  _hunt() {
    return `${this.proto._nickname} охотиться`;
  },
  init() {
    let data = [];
    data.push(this._say());
    data.push(this.proto._eat());
    data.push(this._hunt());
    return data;
  },
};

const Dog = {
  proto: Init,
  _say() {
    return "собака лает: Гав - Гав";
  },
  init() {
    let data = [];
    data.push(this._say());
    data.push(this.proto._eat());
    return data;
  },
};

const Parrot = {
  proto: Init,
  _say() {
    return "попугай шебечет: Попка-дурак";
  },
  init() {
    let data = [];
    data.push("Попугай по имени " + this.proto._nickname);
    data.push(this._say());
    return data;
  },
};

console.log(Parrot.init());
console.log(Dog.init());
console.log(Cat.init());
console.log(Parrot.proto.rename("Сдфава123 в"));
console.log(Dog.proto.rename("Сдфава123 в"));
console.log(Cat.proto.rename("Сдфава123 в"));
console.log(Parrot.init());
console.log(Dog.init());
console.log(Cat.init());
