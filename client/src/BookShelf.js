import BookCover from "./BookCover";



function BookShelf({ eachBookCost, totalExpenses, books }) {

    function separate(eachBookCost) {
        const title = eachBookCost.filter(x => x.length > 0)
        const sumCost = eachBookCost.filter(x => x >= 0)
        const obj = sumCost.map((arr) => ({...arr,['total']:arr}))
        return console.log(obj);
        
    }

    let all = separate(eachBookCost)



    let layed = []
    if (books?.length > 0) {

        layed = eachBookCost?.map((book) => {
            return (

                <BookCover
                    key={book.id}
                    bookExp={book.expenses}
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
/// .filter seprates the values of a string and a numbe

// const obj = {};
// for(let i = 0; i < number.length; i++){
//    const { total, number } = number[i];
//    obj[total] = number;
// };


// const numObjects = number
//   .map(([total]) => ({ total }));

// l


// const yourArray = [0, 567, 80, 171 ];

// const [total] = yourArray;
// const yourObject = { total};

// console.log(yourObject);


// add to itself ///
// array.map(o => array.map(x => x + o) )

// Uncaught SyntaxError: Rest parameter must be last formal parameter
// > yourArray.map((arr) => ({...arr,['total']:arr}))
// [ { total: 0 }, { total: 567 }, { total: 80 }, { total: 171 } ]