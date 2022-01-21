import BookCover from "./BookCover";



function BookShelf({ totalExpenses, books }) {



        let layed = 'No Book`s'
        if (books.length > 0) {

            layed = books.map((book) => {
                return (

                <BookCover 
                    bookExp={totalExpenses}
                    title={book.title}
                />
                
                )
            });
        }



    return (
        <div className='bookslot'>
           {layed}
        </div>
    )

}

export default BookShelf;