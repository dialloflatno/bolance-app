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
        book.categories.map((category) => category.expenses.map((x) => x.cost)).flat()
    );
    debugger

    console.log(arrayOfExpensesAll);


    function sum(allInt) {
        const arrayOfNumbers = allInt.flat().filter(v => v > 0)
        const amountTotaled = arrayOfNumbers?.reduce((p, c) => p + c, 0)
        return amountTotaled
    }

    let amount = sum(arrayOfExpensesAll)

    console.log(amount);

    function placeBook(newBook) {
        console.log("Book Packed");
        const addBook = [...books, newBook];
        setBooks(() => addBook);
    }

    let totalExpenses = "Great Work Budgeting !"; /// error message ////

    const eachBookCost = usersBookPile.map(book => [book.title, sum(book.categories.map(x => x.expenses.map(xe => xe.cost)))]).flat()
    console.log(eachBookCost);


    const title = eachBookCost.filter(x => x.length > 0)
    const sumCost = eachBookCost.filter(x => x >= 0)
    const o = title.map(((arr) => ({ ['title']: arr })))
    const g = sumCost.map(((arr) => ({ ['total']: arr })))
    const bookExp = g.map(d => d.total)
debugger
    // if (books.length > 0) {

    //   totalExpenses = books.map(book => {
    //         return (
    //             book.categories.map(category => { return category.expenses.map(t => { return (t.cost) }) })
    //         )
    //     }).reduce(reducer).split(',').map(function (item) {
    //         return parseInt(item);
    //     }).reduce(reducer)
    // }
    // else {
    //     return ( 'hey' )
    // }
    console.log(g.map(d => d.total === 200));

    return (
        <div className={"App " + (isDarkMode ? "dark" : "light")}>
            <div className="OverView">
                <div id="top">
                    <h1>Overview</h1>

                    <h5>Expense:{amount ? amount : totalExpenses}</h5>
                </div>
                <DoughnutChart bookExp={g.map(d => d.total)} title ={title}
                />
                <h1>Largest Expense:${Math.max(...bookExp.values())}</h1>
                <div className="m">
                    <BookShelf o={o} g={g}  totalExpenses={totalExpenses} />
                </div>
                <div>
                    <BookForm user={user} placeBook={placeBook} />
                </div>
                <footer>Bolance App | Your Best Budget ! </footer>
            </div>
        </div>
    );
}

export default Overview;
