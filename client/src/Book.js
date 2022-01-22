import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TotalExp from './TotalExp'
import List from './List'
import Form from './Form'
import CategoriesForm from './CategoriesForm'

function Book() {

  const { book_id } = useParams()

  const url = `/books/${book_id}`
  const [bookDisplayed, setBookDisplayed] = useState()
  const [show, setShow] = useState(false)
  const [toggle, setToggle] = useState('')
  const [update, setUpdate] = useState('')
  const [categoriesArr, setCategoriesArr] = useState([])
  const [listOfExpenses, setList] = useState([])
  // const [newEntry, setNewEntry] = useState('')



  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((bookResp) => {
          setBookDisplayed(bookResp)
          setCategoriesArr(bookResp.categories)
      })
  }, [url])

  /////PATCH ____
  function whileUpdatingName(e) {
    e.preventDefault()
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: update,
      }),
    })
      .then((r) => r.json())
      .then((data) => {setShow(!data)})
  }
  

  ////////^^^^Adding Categories to Book ^^^^^^////////////////////

  function addCategories(new_cat) {
    const nameOfACategory = new_cat.category
    const addCat = [...categoriesArr, nameOfACategory]
    setCategoriesArr(addCat)
  }
  ////////^^^^Adding Categories to Book ^^^^^^////////////////////


console.log(categoriesArr);


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
  }


  ////--CHART--/////////////////////////////////////////////////////////
  //--------MOVED TO THE CHART COMPONENT ----------------------////////
  ////--CHART--//////////////////////////////////////////////////////



  function handleReportListClick(e) {
    console.log(e.target.value);
    const category = e.target.value
    console.log('rescrusive list')
    const showExpenses = categoriesArr?.find(
      (categoryName) => categoryName.name === category,
    )
    console.log(showExpenses.id)
    setList(showExpenses)
  }

  const display = listOfExpenses.expenses

  const expDropDown = categoriesArr?.map((n) => {
    return (
      <>
        <option key={n.id}>{n.name}</option>
      </>
    )
  })
  console.log(expDropDown);

  function handleSwitch() {
    setShow(true)
  }
  ////Deleting Book ////////////////////////

  function handleToss(e) {
    console.log(e.target.value)
    fetch(url, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => console.log('deleted!'))
  }
  ////Deleting Book ////////////////////////


  const expense = ''

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
                <h6>{bookDisplayed?.title}</h6> |{' '}
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
          <TotalExp categoriesArr={categoriesArr} />
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
          display={display}
        />
      </div>
    </>
  )
}

export default Book
