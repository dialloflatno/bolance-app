import BookShelf from './BookShelf.js'
import { useEffect, useState } from 'react'
import DoughnutChart from './DougnutChart.js'
import Budget from './Budget.js'

function Overview({ user, setBooks, books, isDarkMode }) {
  const [usersBookPile, setBookPile] = useState([])
  const [subs, setSub] = useState(user.subscriptions)
  useEffect(() => {
    fetch(`/api/books/user/${user.id}`)
      .then((r) => r.json())
      .then((bookPile) => setBookPile(bookPile))
  }, [])
  const arrayOfExpensesAll = usersBookPile?.map((book) =>
    book.categories
      .map((category) => category.expenses.map((x) => x.cost))
      .flat(),
  )

  function handleUpdateSubStatus(statUpdate) {
    setSub(statUpdate)
  }

  const mySum = function sum(allInt) {
    const arrayOfNumbers = allInt.flat().filter((v) => v > 0)
    const amountTotaled = arrayOfNumbers?.reduce((p, c) => p + c, 0)
    return amountTotaled
  }
  let amountBudget = usersBookPile.map((my) => (
    <Budget
      title={my.title}
      budget={my.budget}
      category={my.categories}
      mySum={mySum}
    />
  ))

  console.log(amountBudget)
  let amount = mySum(arrayOfExpensesAll)

  console.log(amount)

  function placeBook(newBook) {
    console.log('Book Packed')
    const addBook = [...books, newBook]
    setBooks(() => addBook)
  }

  let totalExpenses = 'Great Work Budgeting !' /// error message ////

  const eachBookCost = usersBookPile
    .map((book) => [
      book.title,
      mySum(book.categories.map((x) => x.expenses.map((xe) => xe.cost))),
    ])
    .flat()

  const title = eachBookCost.filter((x) => x.length > 0)
  const sumCost = eachBookCost.filter((x) => x >= 0)
  const o = title.map((arr) => ({ ['title']: arr }))
  const g = sumCost.map((arr) => ({ ['total']: arr }))
  const bookExp = g.map((d) => d.total)

  function mergeArrayObjects(titles, totals) {
    return titles.map((matches, i) => {
      if (matches.id === [i].id) {
        return Object.assign({}, matches, totals[i])
      }
    })
  }

  const titleBookCost = mergeArrayObjects(o, g)
  console.log(g.map((d) => d.total === 200))

  return (
    <div className={'App ' + (isDarkMode ? 'dark' : 'light')}>
      <div className="OverView">
        <div className="View">
          <div id="top">
            <h1>Overview</h1>
          </div>

          <div className="maincard">
            <div className="prop-container">
              <div className="m">
                <div className="grid-contanier">
                  <div className="cardChart">
                    <h5>
                      Overall Books Total :{' '}
                      <h1>{amount ? amount : totalExpenses}</h1>dollars
                    </h5>
                    <h5>
                      <h3>'</h3> Largest Expense:
                      <strong>{Math.max(...bookExp.values())}</strong>
                      <h3>'</h3> Smallest Expense:$
                      {Math.min(...bookExp.values())}
                    </h5>

                    <DoughnutChart
                      title={o}
                      bookExp={g.map((d) => d.total)}
                      title={title}
                    />
                  </div>

                  <BookShelf
                    amountBudget={amountBudget}
                    titleTotal={titleBookCost}
                    user={user}
                    placeBook={placeBook}
                    o={o}
                    g={g}
                    setUp={handleUpdateSubStatus}
                    subs={subs}
                    title={title}
                    totalExpenses={totalExpenses}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
