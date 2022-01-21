import Nav from "./Nav";
import BookShelf from "./BookShelf.js";
import BookForm from "./BookForm.js";
import {useState } from "react";




function Overview({ user}) {

    const [books, setBooks] = useState(user.books) /// data is for the books of the user //////
console.log(books);
    function placeBook(newBook) {
        console.log('Book Packed');
        const addBook = [...books, newBook];
        setBooks(addBook)
    };

    let totalBookExpenses = 'Great Work Budgeting !' /// error message ////




    // if (books.length > 0) {

    //   totalBookExpenses = books.map(book => {
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
    
        console.log(user);







    return (

        <div className='appback'>
            <div className='OverView'>
                <div id='top'>
                    {/* <h2>{user.full_name}</h2> */}
                    <h1>Overview</h1>

                    <h5>Expense:{totalBookExpenses}</h5>
                </div>
                <div className='m'>
                    <BookShelf view={books} bookExp={totalBookExpenses} />
                </div>
                <div>
                    <BookForm user={user} placeBook={placeBook} />
                </div>
                <footer>Bolance App | Your Best Budget ! </footer>
            </div>
        </div>
    )

}

export default Overview;