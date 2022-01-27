import BookShelf from "./BookShelf.js";
import BookForm from "./BookForm.js";

function Overview({ user, setBooks, books ,isDarkMode}) {
    // const [books, setBooks] = useState(user.books) /// data is for the books of the user //////

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
              

                    
                    <h5>Expense:{totalExpenses}</h5>
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
