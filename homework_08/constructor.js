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

class SelectConstAnim {
  constructor(nickname, animal) {
    this._animal = animal;
    this._nickname = nickname;
  }
  rename(input) {
    if (/[а-яА-ЯёЁ0-9]+ */g.test(input)) {
      return (this._nickname = input);
    }
  }
  _eat() {
    return `${this._nickname} ест`;
  }
  _say() {
    switch (this.animal) {
      case "cat":
        return "Mяу - Mяу";
      case "dog":
        return "Гав - Гав";
      case "parot":
        return "Цыф - цыф";
      default:
        return;
    }
  }
  _hunt() {
    if (this.animal === "cat") {
      return `${this._nickname} охотиться`;
    }
  }
  main() {
    let data = [];
    data.push(this._eat());
    this._say() && data.push("животное говорит " + this._say());
    this._hunt() && data.push(this._hunt());

    return data;
  }
}

const init_Cat = new SelectConstAnim("Slava", "dog");

init_Cat.rename("Уфыв");

console.log(init_Cat.main());
