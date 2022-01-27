import BookCover from "./BookCover";



function BookShelf({ totalExpenses, books }) {



        let layed = []
        if (books?.length > 0) {

            layed = books?.map((book) => {
                return (

                <BookCover 
                    key={book.id}
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