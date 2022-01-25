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

function Book({ setTotal }) {
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
  const [booksTitle, setBookTitle] = useState('');


  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((bookResp) => {
        setBookDisplayed(bookResp);
        setBookTitle(bookResp.title)
        setCategoriesArr(bookResp.categories)
        setFetchName(bookResp.categories.map(o => o.name));
        setFetchExp(bookResp.categories.map(o => o.expenses));
      });
  }, [url]);

  console.log(catogeryNames);
  console.log(catogeryExp);



  let t = 0
  if (catogeryExp?.length > 0) {
    t = catogeryExp?.map((o, index) => o.map(x => x.cost)).flat()
    console.log(t);
    let total = 0
    for (let i = 0; i < t.length; i++) {
      total = total + t[i]
    }

  }

  console.log(t);
  let sum = []

  if (t.length > 0) {

    sum = t.reduce((prev, curr) => prev + curr)

  }
  
  console.log(sum);

  /////PATCH ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷///////////

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
      .then((data) => {

        setBookTitle(update)
        setShow(!data)

      });
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
    debugger
    const updatedCategory = entry.category;
    const newCategoriesArray = [...categoriesArr]
    Object.assign(categoriesArr.find((o) => o.id === updatedCategory.id), updatedCategory)
    setCategoriesArr(newCategoriesArray)
    console.log(newCategoriesArray);

  }

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

  const display = listOfExpenses.expenses;
console.log(display);
  ////// DELETED EXPENSE ////////////////////////////////////////////////////////////////////////////////////////////////////

  function handleDeleteItem(act) {
    console.log(catogeryExp);
    const presentLists = catogeryExp.map(o => o.map(x => x)).filter((entry) => entry.id !== act.id);
    debugger
    //// presentList Array of [{id}]'s//////
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
                      {booksTitle}{" "}
                      {sum ? (`$${sum}`) : "Great Work Budgeting !"}
                    </h6>
                  </div>
                  <div>
                    <Setting whileUpdatingName={whileUpdatingName} setUpdate={setUpdate} handleToss={handleToss} show={show} handleSwitch={handleSwitch} />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="nc">
          <Categories categoriesArr={categoriesArr} />
          <BarChart labels={catogeryNames} expenses={t} />
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
