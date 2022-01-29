import BookShelf from "./BookShelf.js";
import BookForm from "./BookForm.js";
import { useEffect, useState } from "react";

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
        const arrayOfNumbers = allInt.flat().filter(v => v >  0)
        const amountTotaled =  arrayOfNumbers?.reduce((p, c) => p + c, 0)
        return  amountTotaled
    }

    let amount = sum(arrayOfExpensesAll)

    console.log(amount);

    function placeBook(newBook) {
        console.log("Book Packed");
        const addBook = [...books, newBook];
        setBooks(() => addBook);
    }

    let totalExpenses = "Great Work Budgeting !"; /// error message ////

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

    return (
        <div className={"App " + (isDarkMode ? "dark" : "light")}>
            <div className="OverView">
                <div id="top">
                    <h1>Overview</h1>

                    <h5>Expense:{amount ? amount : totalExpenses}</h5>
                </div>
                <div className="m">
                    <BookShelf books={books} totalExpenses={totalExpenses} />
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
