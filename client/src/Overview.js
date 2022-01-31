import BookShelf from "./BookShelf.js";
import BookForm from "./BookForm.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import DoughnutChart from "./DougnutChart.js";

function Overview({ user, setBooks, books, isDarkMode }) {
  const [usersBookPile, setBookPile] = useState([]);

  useEffect(() => {
    fetch(`/api/books/user/${user.id}`)
      .then((r) => r.json())
      .then((bookPile) => setBookPile(bookPile));
  }, []);

  const arrayOfExpensesAll = usersBookPile?.map((book) =>
    book.categories
      .map((category) => category.expenses.map((x) => x.cost))
      .flat()
  );
  debugger;

  console.log(arrayOfExpensesAll);

  function sum(allInt) {
    const arrayOfNumbers = allInt.flat().filter((v) => v > 0);
    const amountTotaled = arrayOfNumbers?.reduce((p, c) => p + c, 0);
    return amountTotaled;
  }

  let amount = sum(arrayOfExpensesAll);

  console.log(amount);

  function placeBook(newBook) {
    console.log("Book Packed");
    const addBook = [...books, newBook];
    setBooks(() => addBook);
  }

  let totalExpenses = "Great Work Budgeting !"; /// error message ////

  const eachBookCost = usersBookPile
    .map((book) => [
      book.title,
      sum(book.categories.map((x) => x.expenses.map((xe) => xe.cost))),
    ])
    .flat();
  console.log(eachBookCost);

  const title = eachBookCost.filter((x) => x.length > 0);
  const sumCost = eachBookCost.filter((x) => x >= 0);
  const o = title.map((arr) => ({ ["title"]: arr }));
  const g = sumCost.map((arr) => ({ ["total"]: arr }));
  const bookExp = g.map((d) => d.total);

  console.log(g.map((d) => d.total === 200));

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <div className="OverView">
        <div className="View">
          <div id="top">
            <h1>Overview</h1>

          </div>

          <div className="prop-container">
            <div className="m">
              <div>
            <div className ='cardChart'>
            <h5>Expense: <h1>{amount ? amount : totalExpenses}</h1></h5>
            <h5>
              Largest Expense:${Math.max(...bookExp.values())} Smallest
              Expense:${Math.min(...bookExp.values())}
            </h5>

                <DoughnutChart
                  title={o}
                  bookExp={g.map((d) => d.total)}
                  title={title}
                />
            </div>
                <BookShelf
                  o={o}
                  g={g}
                  title={title}
                  totalExpenses={totalExpenses}
                />
                <div className="overEp"></div>
              </div>
            </div>

          </div>
        </div>
        {/* <footer>Bolance App | Your Best Budget ! </footer> */}
      </div>
          <BookForm user={user} placeBook={placeBook} />
    </div>
  );
}

export default Overview;
