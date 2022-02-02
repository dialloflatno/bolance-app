import BookCover from './BookCover'
import BookForm from './BookForm'
import DoughnutChart from './DougnutChart'
import fico from './fico.png'
import Subscript from './Subscript'
// import Map from './Map'

function BookShelf({ o, titleTotal, placeBook, user ,subs}) {
  console.log(titleTotal)

  let layed = []
  if (o?.length > 0) {
    layed = titleTotal?.map((book) => {
      return <BookCover key={book.id} bookExp={book.total} title={book.title} />
    })
  }
const listOfSubs = subs.map( companies => { 
    return <Subscript 
      key = {companies.id}
      company = {companies.company}
      payment = {companies.paymentpermonth}
      startDate = {companies.month}
     />
})



const subSum = subs.map(sub => sub.paymentpermonth).reduce((p,c)=> p + c,0)
  console.log(subSum);
  return (
    <div>
      <div className="correction-m">
        <div className="bookslot">
          <div className="book-tanker">
            {layed}
            <div>
              <BookForm user={user} placeBook={placeBook} />
            </div>
            <div className="cardMain">
              <p>${subSum}</p>
                Subcriptions
                <table >
        <thead>
          <tr className='sub-table'>
            <th>Service</th>
            <th>Start Date</th>
            <th>Monthly Payment</th>
          </tr>
        </thead>
        <tbody>
          <td>{listOfSubs}</td>
        </tbody>
      </table>
                
            </div>
          </div>
          <div className="cardSide">FICO SCORE PLACEMENT</div>
        </div>
      </div>
    </div>
  )
}

export default BookShelf

//// iterate thorugh the array if the value
/// is a string returns true add
/// title: if the value is false return a total: added to expense
/// .filter seprates the values of a string and a number
