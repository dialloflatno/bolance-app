import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TotalExp from './TotalExp'
import List from './List'
import Form from './Form'
import CategoriesForm from './CategoriesForm'

function Book({ user, setUser }) {
  const { book_id } = useParams()

  const url = `/books/${book_id}`
  const [book, setBook] = useState('')
  const [show, setShow] = useState(false)
  const [toggle, setToggle] = useState('')
  const [update, setUpdate] = useState('')
  const [listOfExpenses, setList] = useState([])
  const [newEntry, setNewEntry] = useState('')
  const [categoriesArr, setArrayCategories] = useState([])
  /////PATCH ____

  function whileUpdatingName(e) {
    e.preventDefault()
    fetch(`/books/${book_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: update,
      }),
    })
      .then((r) => r.json())
      .then((data) =>  window.location.reload(data))
  }
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((shelf) => setBook(shelf))
  }, [])


  console.log(categoriesArr)

  function addCategories(new_cat) {
    console.log('Category Added')
    console.log(new_cat.category)
    const nameOfACategory = new_cat.category
    const addCat = [...categoriesArr, nameOfACategory]
    console.log(addCat)
    setArrayCategories(addCat)
  }

  function handlesApperacance() {
    setToggle(true)
  }
  function handlesDisapperacance() {
    setToggle(false)
  }
  function entryHandled(entry) {
    console.log('new entry slotted')
    const singleExpense = entry.expense
    const plusOne = [...listOfExpenses, singleExpense]
    console.log(plusOne);
    setNewEntry(plusOne)
  }

  // const categoriesArr = book?.categories;
  const labels = categoriesArr?.map((o) => o.name)
  /// dataList = [202,20,1]
  const dataListOfCosts = categoriesArr?.map((o) =>
    o.expenses?.map((x) => x.cost),
  )
  /// dataList = [[202],[20],[1]] <<<----- What im getting
  // debugger

  let dataList = ''
  if (dataListOfCosts?.length < 0) {
    dataList = dataListOfCosts.map((o) => o.reduce((prev, curr) => prev + curr))
  }
  let valueCost = ''

  if (dataListOfCosts?.length < 0) {
    valueCost = dataListOfCosts?.reduce((prev, curr) => prev + curr).split(',')
  }
  console.log(parseInt(valueCost))
  const expense = parseInt(valueCost)

  console.log(newEntry)

  function handleReportListClick(e) {
    const category = e.target.value
    console.log('rescrusive list')
    const showExpenses = categoriesArr?.find(
      (categoryName) => categoryName.name == category,
    )
    console.log(showExpenses.id)
    setList(showExpenses)
  }

  const display = listOfExpenses.expenses

  const expDropDown = categoriesArr?.map((n) => {
    return (
      <>
        <option>{n.name}</option>
      </>
    )
  })

  function handleSwitch() {
    setShow(true)
  }

  function handleToss(e) {
    alert(
      'Are Your Sure You Want to  permenatly delete your Book? this will destory all of your files ',
    )
    console.log(e.target.value)

    fetch(`/books/${book_id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => console.log('deleted!'))
  }

  console.log(show)

  return (
    <>
      <div className="bckg">
        <div className="page_lay">
          <div className='noos'>
            <button className="toss" onClick={handleToss}>
              Toss
            </button>
            {toggle ? (
              <Form
                entryHandled={entryHandled}
                className="tranv"
                expDropDown={expDropDown}
                categoriesArr={categoriesArr}
              />
            ) : (
              ''
            )}
            {toggle ? (
              <button onClick={handlesDisapperacance} className="drpfrm-close">
                ▼
              </button>
            ) : (
              <button
                onClick={handlesApperacance}
                value={false}
                className="drpfrm"
              >
                ▼
              </button>
            )}

          </div>
          {show ? (
            <label className="perTitle">
              <form id="titlePATCH" onSubmit={whileUpdatingName}>
                <input
                  placeholder="new title"
                  type="text"
                  onChange={(e) => setUpdate(e.target.value)}
                />
              </form>{' '}
            </label>
          ) : (
            <>
              <label className="perTitle">
                <h6>{book?.title}</h6> |{' '}
                <h9>{expense ? expense : 'Great Work Budgeting !'}</h9>
              </label>
              <h5 onClick={handleSwitch} className="toggle_update">
                Change Book Title
              </h5>
            </>
          )}
          <CategoriesForm addCategories={addCategories} book_id={book_id} />
        </div>
        <div>
          <TotalExp labels={labels} dataList={dataList} />
        </div>
      </div>

      <select onChange={handleReportListClick} className="category-dropdown">
        <option value="All" display="All">
          All
        </option>
        {expDropDown}
      </select>
      <div>
        <List
          user={user}
          categoriesArr={categoriesArr}
          listOfExpenses={display}
        />
      </div>
    </>
  )
}

export default Book
