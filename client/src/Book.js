import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import List from "./List";
import Form from "./Form";
import Categories from "./Categories";
import CategoriesForm from "./CategoriesForm";
import BarChart from "./BarChart";
import FormToggle from "./FormToggle";
import Setting from "./Setting";

function Book({ setTotal }) {
  const { book_id } = useParams();

  const url = `/books/${book_id}`;
  const [bookDisplayed, setBookDisplayed] = useState(); //<<< book: [ :title, categories:[ :name, :expenses:[] ]]
  const [categoriesArr, setCategoriesArr] = useState(); //<<< categories: [ :name, :expenses:[]]
  const [listOfExpenses, setList] = useState([]);
  const [catogeryNames, setFetchName] = useState(); ///<<< categories: [ :name ]
  const [catogeryExp, setFetchExp] = useState(); ///<<< categories: [:expenses:[]]
  const [booksTitle, setBookTitle] = useState(""); ///<<< book: [ :title ]
  const [name, setCategoryName] = useState("");
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((bookResp) => {
        setBookDisplayed(() => bookResp); //<<< book: [ :title, categories:[ :name, :expenses:[] ]]
        setBookTitle(() => bookResp.title); ///<<< book: [ :title ]
        setCategoriesArr(() => bookResp.categories); ///<<< categories: [ :name, :expenses:[]]
        setFetchName(() => bookResp.categories.map((o) => o.name)); ///<<< categories: [ :name ]
        setFetchExp(() => bookResp.categories.map((o) => o.expenses)); ///<<< categories: [:expenses:[]]
      });
  }, [url]);

  //filter out the categories that are not selected //
  /// then attempt a .map()  ////

  let t = 0;
  if (catogeryExp?.length > 0) {
    t = catogeryExp?.map((o, index) => o.map((x) => x.cost)).flat();
    console.log(t);
    let total = 0;
    for (let i = 0; i < t.length; i++) {
      total = total + t[i];
    }
  }

  console.log(t);
  let sum = [];

  if (t.length > 0) {
    sum = t.reduce((prev, curr) => prev + curr);
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
        setBookTitle(update);
        setShow(!data);
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
    }).then(data => console.log(data))
  }
  ////Deleting Book //////////////////////// <---------  NEEDS TO BE HANDLED

  //// Toggle for Form  ////////////////////////

  function handleSwitch() {
    setShow(true);
  }
  //// Toggle for Form  ////////////////////////

  //// Adding a new Expense to a category  ////////////////////////

  function entryHandled(entry) {
    const updatedCategory = entry.category;
    const newCategoriesArray = [...categoriesArr];
    Object.assign(
      categoriesArr.find((o) => o.id === updatedCategory.id),
      updatedCategory
    );
    setCategoriesArr(newCategoriesArray);
    console.log(newCategoriesArray);
  }

  // const expensesToDisplay = catogeryExp.filter((item) => {
  //   if (selectedCategory === "All") return true;

  //   return item.category === selectedCategory;
  // });

  // function makeArrayOfExpenses(categories) {
  //   const arrayOfExpenses = categories?.map((category) =>
  //     category.categories.map((name, expenses) => name.expenses))
  //     return arrayOfExpenses

  // }

  // const arrayOfExpenses = makeArrayOfExpenses();

  // function handleReportListClick(e) {
  //   const category = e.target.value;
  //   console.log("rescrusive list");
  //   const showExpenses = categoriesArr?.find(
  //     (categoryName) => categoryName.name === category
  //   );
  //   setList(showExpenses);
  // }

  function handleReportListClick(e) {
  const category = e.target.value   
  if(category === 'All'){ 
    return setList(() => bookDisplayed.categories.map(x => x.expenses).flat());
    
  }else{
    const showExpenses = categoriesArr?.find(
          (categoryName) => categoryName.name === category
        );
        setList(() => showExpenses.expenses);
  }


}

console.log(listOfExpenses);



  ////// DELETED EXPENSE ////////////////////////////////////////////////////////////////////////////////////////////////////

  function handleDeleteItem(act) {
    // console.log(catogeryExp);
    // const presentLists = catogeryExp.map(o => o.map(x => x)).filter((entry) => entry.id !== act.id);
    // debugger
    // //// presentList Array of [{id}]'s//////
    // setList(presentLists);
  }

  ////// DELETED EXPENSE ////////////////////////////////////////////////////////////////////////////////////////////////////

  // TODO: rename this to like...categoriesDropDown

  const categoriesDropDown = categoriesArr?.map((n, id) => {
    return (
      <>
        <option key={id}>{n.name}</option>
      </>
    );
  });


  // returns me a list of names

//////////////////////////////////////////////////////


  // const expensesToDisplay = catogeryExp.filter((item) => {
  //   if (selectedCategory === "All") return true;

  //   return item.category === selectedCategory;
  // });

  ///vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv///

  // input: array of category objects with all data
  //  e.g.: [{category: }, {}]
  // output: array of expense objects
  //  e.g.: [{expense1}, {expense2}, ...]

  // if All, extract all expenses and put inside of array
  // otherwise, display expenses for only specfied category

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
                      <strong>{booksTitle}</strong> {sum ? `Total Book Value : $${sum}` : "Great Work Budgeting !"}
                    </h6>
                  </div>
                  <div>
                    <Setting
                      whileUpdatingName={whileUpdatingName}
                      setUpdate={setUpdate}
                      handleToss={handleToss}
                      show={show}
                      handleSwitch={handleSwitch}
                    />
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
                expDropDown={categoriesDropDown}
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
            <option value={null} display = 'All'>
              All
            </option>
            {categoriesDropDown}
          </select>

          <div>
            <List
             catogeryExp ={catogeryExp}
              handleDeleteItem={entryHandled}
              arrayOfExpenses={listOfExpenses}
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
