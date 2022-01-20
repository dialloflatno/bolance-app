import BookCover from "./BookCover";



function BookShelf({ bookExp, view ,email,user}) {



    let layed = 'No Book`s'
    if (view.length > 0) {

        layed = view.map((archBook) => {
            return (
                <BookCover 
                    bookExp={bookExp}
                    title={archBook.title}

                />
            );
        });

    }






    return (
        <div className='bookslot'>
           {layed}
        </div>
    )

}

export default BookShelf;