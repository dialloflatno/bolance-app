import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TotalExp from "./TotalExp";
import List from "./List";
import Form from "./Form";
import Categories from "./Categories";
import CategoriesForm from "./CategoriesForm";
import { Chart } from "react-chartjs-2";
import BarChart from "./BarChart";
import NChart from "./NChart";
import FormToggle from "./FormToggle";
import Setting from "./Setting";

function Book() {
  const { book_id } = useParams();

  const url = `/books/${book_id}`;
  const [bookDisplayed, setBookDisplayed] = useState();
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [update, setUpdate] = useState(false);
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [listOfExpenses, setList] = useState(categoriesArr);
  const [newEntry, setNewEntry] = useState("");
  const [name, setCategoryName] = useState("");
  const [catogeryNames, setFetchName] = useState();
  const [catogeryExp, setFetchExp] = useState();


  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((bookResp) => {
        setBookDisplayed(bookResp);
        setCategoriesArr(bookResp.categories)
        setFetchName(bookResp.categories.map(o => o.name));
        setFetchExp(bookResp.categories.map(o => o.expenses));
      });
  }, [url]);

console.log(catogeryNames);
console.log(catogeryExp);
// const totalExpForCategory = 'darn'


  // const totalExpForCategory = catogeryExp?.map(o => o.map(x => x.cost)).flat().reduce((prev,curr) => prev + curr)

// if ( catogeryExp?.length > 0){
//   totalExpForCategory = catogeryExp.map(o => o.map(x => x.cost)).flat().reduce((prev,curr) => prev + curr)
// }






// console.log(totalExpForCategory);
  /////PATCH ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷///////////
  debugger

  function whileUpdatingName(e) {
    e.preventDefault();
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: update,
      }),
    })
      .then((r) => r.json())
      .then((data) => setShow(!data));
  }



  /////PATCH ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷///////////

  ////////^^^^Adding Categories to Book ^^^^^^////////////////////

  function addCategories(new_cat) {
    const nameOfACategory = new_cat.category;
    const addCat = [...categoriesArr, nameOfACategory];
    setCategoriesArr(addCat);
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
    console.log(e.target.value);
    fetch(url, {
      method: "DELETE",
    });
  }
  ////Deleting Book ////////////////////////

  //// Toggle for Form  ////////////////////////

  function handleSwitch() {
    setShow(true);
  }
  //// Toggle for Form  ////////////////////////

  //// Adding a new Expense to a category  ////////////////////////

  function entryHandled(entry) {
    const newPurchase = entry.category;
    const cat_found = Object.assign(
      categoriesArr.find((o) => o.id === newPurchase.id),
      newPurchase || newPurchase
    );
    console.log(cat_found);
    // const cat_found = categoriesArr?.map((categoryName) => categoryName.name === newPurchase.name)
    // if the match is there take that category an append the new expense to that category.expense array /////
    // const pushToCatgory = [...cat_found.expenses,newPurchase.expenses]
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
    const category = e.target.value;
    console.log("rescrusive list");
    const showExpenses = categoriesArr?.find(
      (categoryName) => categoryName.name === category
    );
    setList(showExpenses);
  }
  /// the function that allow for the reports to show ///

  // my return is a {cat : title , expense: []} which belongs in categories arr

  const display = listOfExpenses.expenses;

  ////// DELETED EXPENSE ////////////////////////////////////////////////////////////////////////////////////////////////////

  function handleDeleteItem(act) {
    // const updatedItems = listOfExpenses.expenses.filter((exp) => exp.id !== act.id);
    const presentLists = listOfExpenses.expenses.filter(
      (entry) => entry.id !== act.id
    );
    setList(presentLists);
  }

  ////// DELETED EXPENSE ////////////////////////////////////////////////////////////////////////////////////////////////////



  const expDropDown = categoriesArr?.map((n, id) => {
    return (
      <>
        <option key={id}>{n.name}</option>
      </>
    );
  });

//
  const expense = "";

  return (
    <>
      <div className="grand-container">
        <div>
          <div className="perTitle">
            <div>
              <div className="label">
                <label>
                  <div>
                    <h6>
                      {bookDisplayed?.title}{" "}
                      {expense ? expense : "Great Work Budgeting !"}
                    </h6>
                  </div>
                  <div>
                    <Setting  handleToss={handleToss} show = {show} handleSwitch ={handleSwitch} />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="nc">
          <Categories categoriesArr={categoriesArr} />
          <BarChart labels ={catogeryNames} expenses ={catogeryExp} />
        </div>
        <div>
          <div>
            <div className="create-Box">
              <FormToggle
                entryHandled={entryHandled}
                expDropDown={expDropDown}
                categoriesArr={categoriesArr}
                setToggle={setToggle}
                toggle={toggle}
              />

              <label>
                <form id="titlePATCH" onSubmit={whileUpdatingName}>
                  <input
                    placeholder="new title"
                    type="text"
                    value={null}
                    onChange={(e) => setUpdate(e.target.value)}
                  />
                </form>
              </label>

              <>
                <CategoriesForm
                  addCategories={addCategories}
                  book_id={book_id}
                  name={name}
                  setCategoryName={setCategoryName}
                />
              </>
            </div>
          </div>
          <select
            onChange={handleReportListClick}
            className="category-dropdown"
          >
            <option value={null} display="All">
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
        </div>
        {/* <BarChart/> */}
        <div>
          {/* <h5 onClick={handleSwitch} className="toggle_update">
            Change Book Title
          </h5>
          <button className="toss" onClick={handleToss}>
            Toss
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Book;
