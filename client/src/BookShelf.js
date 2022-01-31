import BookCover from "./BookCover";

import DoughnutChart from "./DougnutChart";

function BookShelf({ o, g, title }) {

    let m = [...o,...g]

    console.log(m);



    let layed = []
    if (o?.length > 0) {

        layed = o?.map((book) => {
            return (

                <BookCover
                    key={book.id}
                    bookExp={23}
                    title={book.title}
                />

            )
        });
    }



    return (
        <div >
            <div className='bookslot'>

                {layed}
            </div>
        </div>
    )

}

export default BookShelf;


//// iterate thorugh the array if the value
/// is a string returns true add 
/// title: if the value is false return a total: added to expense 
/// .filter seprates the values of a string and a number 


