import Nav from "./Nav";
import BookShelf from "./BookShelf.js";
import BookForm from "./BookForm.js";
import { useEffect, useState } from "react";




function Overview({ user, setUser }) {

    const [books, setBooks] = useState(user.books)
    // const booksUrl = '/books'


    // useEffect(() => {
    //     fetch(booksUrl)
    //         .then((r) => r.json())
    //         .then((bookcase) => setBooks(bookcase))
    // }, []);
console.log(books)

    function placeBook(newBook) {
        console.log('Book Packed');
        const addBook = [...books, newBook];
        setBooks(addBook)
    };

    // const reducer = (prev,current) => prev + current
    let totalBookExpenses = 'Great Work Budgeting !'




    // if (books.length > 0) {

    //   totalBookExpenses = books.map(book => {
    //         return (
    //             book.categories.map(category => { return category.transactions.map(t => { return (t.cost) }) })
    //         )
    //     }).reduce(reducer).split(',').map(function (item) {
    //         return parseInt(item);
    //     }).reduce(reducer)
    // }
    // // else {
    // //     return ( 'hey' )
    // // }






console.log(user);


    return (

        <div>
            <Nav user ={user}setUser={setUser} />
            <div id='top'>
                {/* <h2>{user.full_name}</h2> */}
                <h1>Overview</h1>

                <h5>Expense:{totalBookExpenses}</h5>
            </div>
            <div className='m'>
                <BookShelf view={books} bookExp={totalBookExpenses} />
            </div>
            <div>
                <BookForm user ={user} placeBook={placeBook} />
            </div>


        </div>
    )

}

export default Overview;