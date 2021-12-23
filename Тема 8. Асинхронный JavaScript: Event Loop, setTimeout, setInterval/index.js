// 1. Разработать скрипт. 
// Пользователь вводит два числа (i, j),
//  каждую секунду выводить число от i до j 
// (реализвать через setTimeout и setInterval).

const data = {
    initTimeout() {
      let timer = [];
      const array = [...Array(this.j + 1).keys()];
      array.forEach((x) => {
        if (x >= this.i) {
          let timeout = () =>
            setTimeout(() => {
              console.log(x);
            }, [x * 1000]);
          timer.push(timeout);
        }
      });
      timer.map((x) => x());
  
      return `timeout Start for range ${this.i} to ${this.j} includes`;
    },
    initInterval() {
      let timer = [];
  
      const array = [...Array(this.j + 1).keys()];
      array.forEach((x) => {
        if (x >= this.i) {
          const interval = () => {
            return new Promise((resolve) => {
              setInterval(() => {
                timer.push(interval);
                resolve(x);
              }, [x * 1000]);
            });
          };
  
          timer.push(interval);
        }
      });
  
      timer.map((x) => {
        x().then((element) => {
          console.log(element);
          clearInterval(x);
        });
      });
  
      return `interval Start for range ${this.i} to ${this.j} includes`;
    },
  };
  
  const init = {
    i: 7,
    j: 10,
    ...data,
  };
  
  console.log(init.initInterval());