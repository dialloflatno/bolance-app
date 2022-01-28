import BookShelf from "./BookShelf.js";
import BookForm from "./BookForm.js";
import { useEffect, useState } from "react";

function Overview({ user, setBooks, books, isDarkMode }) {

    const [usersBookPile, setBookPile] = useState([])

    useEffect(() => {
        fetch(`/api/books/user/${user.id}`)
            .then((r) => r.json())
            .then(bookPile => setBookPile(bookPile))


    }, [])



    let sum = 0;
    if (usersBookPile?.length > 0) {
        sum = [4, 89, 43, 3, 3, 4, 3, 3, 31, 20, 303, null, null, null, null, 3, 34, 4, 20, 20, 20, 20, 20, 20, 8, 34, 23, 3, 43, 20, 20]
        let total = 0;
        for (let i = 0; i < sum.length; i++) {
            total = total + sum[i];
        }
    }
    console.log(sum);

let amount = []


    if (sum.length > 0) {
        amount = sum.reduce((prev, curr) => prev + curr);
    }
  









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
