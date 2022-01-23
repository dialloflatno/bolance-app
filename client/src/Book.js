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
  const [toggle, setToggle] = useState(false)
  const [update, setUpdate] = useState(false)
  const [categoriesArr, setCategoriesArr] = useState([])
  const [listOfExpenses, setList] = useState(categoriesArr)
  const [newEntry, setNewEntry] = useState('')
  const [name, setCategoryName] = useState('')




  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((bookResp) => {
        setBookDisplayed(bookResp)
        setCategoriesArr(bookResp.categories)
      })
  }, [url])

  /////PATCH ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷///////////

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
      .then((data) => setShow(!data))
  }

  /////PATCH ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷///////////


  ////////^^^^Adding Categories to Book ^^^^^^////////////////////

  function addCategories(new_cat) {
    const nameOfACategory = new_cat.category
    const addCat = [...categoriesArr, nameOfACategory]
    setCategoriesArr(addCat)
    }        
      ///|=============RETURN=================|//////
      ///|                                    |//////
      ///|      {2) [{…}, {…}]-----RETURN     |//////
      ///|                                    |//////
      ///|                                    |//////
      ////=====================================//////


  ////////^^^^Adding Categories to Book ^^^^^^////////////////////

  ////Deleting Book ////////////////////////

  function handleToss(e) {
    console.log(e.target.value)
    fetch(url, {
      method: 'DELETE',
    })
  }
  ////Deleting Book ////////////////////////



  //// Toggle for Form  ////////////////////////

  function handlesApperacance() {
    setToggle(true)
  }
  function handlesDisapperacance() {
    setToggle(false)
  }

  function handleSwitch() {
    setShow(true)
  }
  //// Toggle for Form  ////////////////////////


  //// Adding a new Expense to a category  ////////////////////////



function entryHandled(entry){
  const newPurchase = entry.category
  const cat_found = Object.assign(categoriesArr.find(o => o.id === newPurchase.id),newPurchase || newPurchase)
  // const cat_found = categoriesArr?.map((categoryName) => categoryName.name === newPurchase.name)
  // if the match is there take that category an append the new expense to that category.expense array /////
  // const pushToCatgory = [...cat_found.expenses,newPurchase.expenses]
  debugger
  console.log(cat_found);
  // setCategoriesArr(cat_found)

}





  // function entryHandled(entry) {
  //   console.log("new entry slotted");;
  //   const newPurchase = entry.category.expenses
  //   const add = [...newEntry, newPurchase]
  //   console.log(newEntry);
  //   console.log(add);
  //   setNewEntry([add])
  //   setCategoriesArr(newEntry)

  // }
  ///------[Array(1), Array(1)]------------------RETURN

  //// Adding a new Expense to a category  ////////////////////////


  // function entryHandled(entry) {
  //   console.log('new entry slotted')  
  //   const singleExpense = entry.expense
  //   const plusOne = [...listOfExpenses, singleExpense]
  //   setNewEntry(plusOne);
  // }


  ////--CHART--/////////////////////////////////////////////////////////  
  //--------MOVED TO THE CHART COMPONENT ----------------------////////
  ////--CHART--//////////////////////////////////////////////////////


  /// the function that allow for the reports to show ///  

  function handleReportListClick(e) {
    const category = e.target.value
    console.log('rescrusive list')
    const showExpenses = categoriesArr?.find((categoryName) => categoryName.name === category)
    setList(showExpenses)
    
  }
  /// the function that allow for the reports to show ///



  // my return is a {cat : title , expense: []} which belongs in categories arr

console.log(listOfExpenses);

  const display = listOfExpenses.expenses

    function handleDeleteItem(act) {
      const presentList = listOfExpenses.filter((entry) => entry.id !== act.id);
      setList(presentList)
    }


  const expDropDown = categoriesArr?.map((n) => {
    return (
      <>
        <option key={n.id}>{n.name}</option>
      </>
    )
  })


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
                  value={null}
                  onChange={(e) => setUpdate(e.target.value)}
                />
              </form>{' '}
            </label>
          ) : (
            <>
              <label className="perTitle">
                <h6>{bookDisplayed?.title}</h6> |{' '}
                <h5>{expense ? expense : 'Great Work Budgeting !'}</h5>
              </label>
              <h5 onClick={handleSwitch} className="toggle_update">
                Change Book Title
              </h5>
            </>
          )}
          <CategoriesForm addCategories={addCategories} book_id={book_id}   name = {name} setCategoryName={setCategoryName}/>
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
        handleDeleteItem={handleDeleteItem}
          newEntry={newEntry}
          display={display}
        />
      </div>
    </>
  )
}

export default Book
