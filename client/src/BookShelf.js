import BookCover from "./BookCover";



function BookShelf({ o, g, eachBookCost, totalExpenses, books }) {

    // function separate(eachBookCost) {
    //     const title = eachBookCost.filter(x => x.length > 0)
    //     const sumCost = eachBookCost.filter(x => x >= 0)

    //     console.log([title]);
    //     console.log([sumCost]);
    // }

    // separate(eachBookCost)



    let layed = []
    if (o?.length > 0) {

        layed = o?.map((book) => {
            return (

                <BookCover
                    key={book.id}
                    bookExp={0}
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


//// iterate thorugh the array if the value
/// is a string returns true add 
/// title: if the value is false return a total: added to expense 
/// .filter seprates the values of a string and a number 


