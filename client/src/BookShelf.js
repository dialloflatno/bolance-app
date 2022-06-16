import { useState } from 'react'
import BookCover from './BookCover'
import Subscript from './Subscript'

function BookShelf({ o, setUp, titleTotal, placeBook, user, subs }) {

  const [subSum, setSubSum] = useState(subs?.map(sub => sub.paymentpermonth).reduce((p, c) => p + c, 0)
  )


  let layed = []
  if (o?.length > 0) {
    layed = titleTotal?.map((book) => {
      return <BookCover key={book.id} bookExp={book.total} title={book.title} />
    })
  }



  const listOfSubs = subs?.map(companies => {
    return <Subscript

      user={user}
      key={companies.id}
      subOn={companies.subscribed}
      company={companies.company}
      payment={companies.paymentpermonth}
      startDate={companies.month}
      setUpSub={setUp}
      subSum={subSum}

    />
  })




  return (
    <div>
      <div>
        <div className="bookslot">
          <div className="book-tanker">
            <span className='titleBookShelf'><h1>Book Shelf</h1> <button className='buttonBook'>+</button></span>
            <hr />
            {layed}
            <div>

            </div>
            <div className="cardMain">
              <p><h3>  Subcriptions </h3> Monthly Total ${subSum}</p>
              <hr />
              <table>
                <thead>
                  <tr className='sub-table'>
                    <th>Service</th>
                    <th>Start Date</th>
                    <th>Monthly Payment</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <td>{listOfSubs}</td>
                </tbody>
              </table>

            </div>
          </div>
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
