// 3. Реализовать страницу с таблицей.
// Таблица должна содержать инфрмацию,
// полученную по API https://swapi.dev/api/people/
// (массив объектов в свойстве "results").
// А именно росте, весе и поле персонажей
// (поля "name", "height", "mass" и "gender" соответственно).
// *Опционально: предусмотреть возможность сортировки таблицы
// *Опционально: предусмотреть возможность
// перехода к следующей странице (ссылка содержится в объекте API в свойстве "next")
// и предыдущей странице (ссылка содержится в объекте API в свойстве "previous")

async function generate_table(url = "https://swapi.dev/api/people/") {
  var container = document.createElement("div");
  var tbl = document.createElement("table");
  let urlLink = [url];
  tbl.setAttribute("border", "1");

  const { tblBody, next, previous } = await generateHtml(url);
  urlLink.push(next);
  tbl.appendChild(tblBody);

  container.appendChild(tbl);

  var btnNext = document.getElementById("next");
  var btnPrev = document.getElementById("prev");
  btnPrev.onclick = function () {
    generate_table(previous);
  };
  btnNext.onclick = function () {
    generate_table(next);
  };
  container.appendChild(btnPrev);
  container.appendChild(btnNext);

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(container);
}

const generateHtml = async (url) => {
  const { results, next, previous } = await window
    .fetch(url)
    .then((data) => data.json())
    .catch((err) => alert(err.toString()));

  var tblBody = document.createElement("tbody");

  const keys = ["name", "height", "mass", "gender"];
  for (var i = 0; i < results.length; i++) {
    var row = document.createElement("tr");
    const rowLine = results[i];

    for (let value of keys) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode(
        (rowLine?.[value] || "").toString()
      );
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }

  return { tblBody, next, previous };
};
