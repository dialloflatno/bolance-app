import BookCover from "./BookCover";
import BookForm from "./BookForm";
import DoughnutChart from "./DougnutChart";
import Map from './Map'

function BookShelf({ o, g, title,titleTotal, placeBook, user }) {

    let m = [...o, ...g]

    console.log(m);
console.log(titleTotal);


    let layed = []
    if (o?.length > 0) {

        layed = titleTotal?.map((book) => {
            return (

                <BookCover

                    key={book.id}
                    bookExp={book.total}
                    title={book.title}
                />

            )
        });
    }



    return (
        <div >
            <div className='correction-m'  >
                <div className='bookslot'>
                    <div className='book-tanker'>
                        {layed}
                        <div>

                            <BookForm user={user} placeBook={placeBook} />
                        </div>
                        <div className='cardMain'>
                        </div>
                    </div>
                    <div className='cardSide'>
                        Dashboard
                            {/* <Map/> */}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BookShelf;


//// iterate thorugh the array if the value
/// is a string returns true add 
/// title: if the value is false return a total: added to expense 
/// .filter seprates the values of a string and a number 


