import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import List from './List'
import Categories from './Categories'
import CategoriesForm from './CategoriesForm'
import BarChart from './BarChart'
import FormToggle from './FormToggle'
import Setting from './Setting'
import { tally } from './helpers/tally'

function Book() {
  const { book_id } = useParams()
  const [bookDisplayed, setBookDisplayed] = useState(null) //<<< book: [ :title, categories:[ :name, :expenses:[] ]]
  const [categoriesArr, setCategoriesArr] = useState(null) //<<< categories: [ :name, :expenses:[]]
  const [listOfExpenses, setList] = useState([])
  const [catogeryExp, setFetchExp] = useState(null) ///<<< categories: [:expenses:[]]
  const [booksTitle, setBookTitle] = useState('') ///<<< book: [ :title ]
  const [name, setCategoryName] = useState('')
  const [show, setShow] = useState(false)
  const [toggle, setToggle] = useState(true)
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    fetch(`/api/books/${book_id}`)
      .then((r) => r.json())
      .then((bookResp) => {
        setBookDisplayed(() => bookResp) //<<< book: [ :title, categories:[ :name, :expenses:[] ]]
        setBookTitle(() => bookResp?.title) ///<<< book: [ :title ]
        setCategoriesArr(() => bookResp?.categories) ///<<< categories: [ :name, :expenses:[]]
        setFetchExp(() => bookResp?.categories.map((o) => o.expenses)) ///<<< categories: [:expenses:[]]
      })
  }, [`${book_id}`])

  const history = useHistory()

  const t = tally(catogeryExp)

  // Look up React Docs useMemo ////
  /// Read React Docs //////
  // helper directory //

  console.log(t)
  let sum = []

  if (t.length > 0) {
    sum = t.reduce((prev, curr) => prev + curr)
  }

  console.log(sum)

  /////PATCH ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷///////////

  function whileUpdatingName(e) {
    e.preventDefault()
    fetch(`/api/books/${book_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: update,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        setBookTitle(update)
        setShow(!data)
      })
  }

  /////PATCH ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷///////////

  ////////^^^^Adding Categories to Book ^^^^^^////////////////////

  function addCategories(new_cat) {
    const nameOfACategory = new_cat.category
    const addCat = [...categoriesArr, nameOfACategory]
    setCategoriesArr(addCat)
  }

  ////////^^^^Adding Categories to Book ^^^^^^////////////////////

  ////Deleting Book ////////////////////////

  function handleToss(e) {
    console.log(e.target.value)
    fetch(`/api/books/${book_id}`, {
      method: 'DELETE',
    }).then((data) => {
      history.push('/toss')
      console.log(data)
    })
  }
  ////Deleting Book //////////////////////// <---------  NEEDS TO BE HANDLED

  //// Toggle for Form  ////////////////////////

  function handleSwitch() {
    setShow(!show)
  }

  function handleSwitchOff(e) {
    console.log("this should be closed");
  setShow(!show)
  }

  //// Toggle for Form  ////////////////////////

  //// Adding a new Expense to a category  ////////////////////////

  function entryHandled(entry) {
    const updatedCategory = entry.category
    const newCategoriesArray = [...categoriesArr]
    Object.assign(
      categoriesArr.find((o) => o.id === updatedCategory.id),
      updatedCategory,
    )
    setCategoriesArr(newCategoriesArray)
    console.log(newCategoriesArray)
  }

  function handleReportListClick(e) {
    const category = e.target.value
    if (category === 'All') {
      return setList(() =>
        bookDisplayed.categories.map((x) => x.expenses).flat(),
      )
    } else {
      const showExpenses = categoriesArr?.find(
        (categoryName) => categoryName.name === category,
      )
      setList(() => showExpenses.expenses)
    }
  }

  console.log(listOfExpenses)

  ////// DELETED EXPENSE ////////////////////////////////////////////////////////////////////////////////////////////////////

  function handleDeleteItem(act) {
    console.log(act)
  }

  ////// DELETED EXPENSE ////////////////////////////////////////////////////////////////////////////////////////////////////

  const categoriesDropDown = categoriesArr?.map((n, id) => {
    return (
      <>
        <option key={id}>{n.name}</option>
      </>
    )
  })

  const categoryNamesForChart = categoriesArr?.map((n, id) => n.name)
  console.log(categoryNamesForChart)

  const categoryExpenseForChart = categoriesArr
    ?.map((n, id) => n.expenses.map((exp) => exp.cost))
    .flat()

  console.log(categoryExpenseForChart)

  return (
    <>
      <div className="grand-container">
        <div>
          <div className="perTitle">
            <div>
              <div className="label">
                <h6>
                  <strong>{booksTitle}</strong>
                  <h6>
                    {' '}
                    {sum
                      ? `Total Book Expense: $${t}`
                      : 'Great Work Budgeting !'}
                  </h6>
                </h6>
                <label>
                  <div>
                    <div className="jar">
                      <BarChart
                        labels={categoryNamesForChart}
                        expenses={categoryExpenseForChart}
                      />
                      <div className="nc">
                        <CategoriesForm
                          addCategories={addCategories}
                          book_id={book_id}
                          name={name}
                          setCategoryName={setCategoryName}
                        />
                        <FormToggle
                          entryHandled={entryHandled}
                          expDropDown={categoriesDropDown}
                          categoriesArr={categoriesArr}
                          setToggle={setToggle}
                          toggle={toggle}
                        />
                      </div>
                    </div>

                    <></>
                  </div>
                  <div>
                    <Setting
                      whileUpdatingName={whileUpdatingName}
                      setUpdate={setUpdate}
                      handleToss={handleToss}
                      showOn={show}
                      handleSwitchOff={handleSwitchOff}
                      handleSwitch={handleSwitch}
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <List
          handleDeleteItem={handleDeleteItem}
          arrayOfExpenses={listOfExpenses}
          categoriesDropDown={categoriesDropDown}
          handleReportListClick = {handleReportListClick}
        />
      </div>
    </>
  )
}

export default Book
