import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import TotalExp from "./TotalExp";
import List from "./List";
import Form from "./Form";
import Map from "./Map";
// import Form from "./Form";
// import Item from "./Item"
// import TotalExp from "./TotalExp";

function Book({ user, setUser }) {

    const { book_id } = useParams()


    const url = `/books/${book_id}`;
    const [book, setBook] = useState()

    useEffect(() => {
        fetch(url)
            .then(r => r.json())
            .then(shelf => setBook(shelf))
    }, [])



    let expense = 'Great Work Budgeting !'

    console.log(book?.categories);

    // const reducer = (prev,current) => prev + current

    const categoriesArr = book?.categories

    // if (book.length > 0) {

    //   expense = book.map(bookx => {
    //         return (
    //             bookx.categories.map(category => { return category.transactions.map(t => { return (t.cost) }) })
    //         )
    //     }).reduce(reducer).split(',').map(function (item) {
    //         return parseInt(item);
    //     }).reduce(reducer)
    // }





    //   console.log(book.title);

    //  const openedBook = user.books.map(bookPile => bookPile.books.map( book =>{ console.log(book.title)}));
    //  const stuff = bookshelf.map(bookPile => bookPile.categories.map( category =>{ return (category)}));
    //  const stuffMore = bookshelf.map(stuff => stuff.categories.map( category =>{ return (category.name)}));


    // function handleDeleteItem(act) {
    //   const presentList = List.filter((entry) => entry.id !== act.id);
    //   setList(presentList)
    // }

    // function entryHandled(entry) {
    //   console.log("new clothing entry slotted");
    //   const redirectedForm = List.filter(p => p.name.toLowercase().includes(entry) === "clothing");
    //   const clothing = [...List, <div>Clothing</div>, <ul>{redirectedForm}</ul>]
    //   setList(clothing)
    // }

    // function entryHandled(entry) {
    //   console.log("new entry slotted");
    //   const addEntry = [...List, entry]
    //   setList(addEntry)
    // }

    //   const values = Object.values(book);

    //  console.log(values);



    const [toggle, setToggle] = useState('')

    function handlesApperacance() {
        setToggle(true)
      
    }
    function handlesDisapperacance() {
        setToggle(false)
      
    }


    return (

        <>
            <Nav user={user} setUser={setUser} book={book} />
            <div className='bckg'>

                <div className="page_lay">

                    { toggle ?
                     (   <Form /> ) : ( '')
                    }
                    { toggle ?
                     (  
                        <button onClick={handlesDisapperacance} className='drpfrm-close'>▼</button> 
                        ) : (  
                        <button onClick={handlesApperacance} className='drpfrm'>▼</button>)
                    }
                   
                    <label className="perTitle">{book?.title} | {expense ? expense : 'Great Work Budgeting !'}</label>

                    <form className='cats'>
                        <input placeholder=' new category' />
                        <button className='ahd' type='submit'>ADD</button>
                    </form>
                </div>
                <div>
                    <TotalExp categoriesArr={categoriesArr} />
                </div>
            </div>

            <select className="category-dropdown">
                {/* {dropDown} */}
                <option value="All" display="All">All</option>
                <option value="Clothing" display="Clothing">Clothing</option>
                <option value="Outting" >Outting</option>
                <option value="Travel" >Travel</option>
                <option value="Food">Food</option>
            </select>
            <div>
            <List user ={user} />
            </div>
            {/* <Map/> */}

        </>

    );
}

export default Book;

//  <Form urlList={url} entryHandled={entryHandled} /> 
    // <label className="perTitle">BOOK</label>
    // <br></br>
    // <div className="ExpCard">
    //   {/* <TotalExp List={list} /> */}
    // </div>
    //  <select className="category-dropdown">
    //      {dropDown}
    //   {/* <option value="All" display="All">All</option>
    //   <option value="Clothing" display="Clothing">{user.categories[0].name}</option>
    //   <option value="Outting" >{user.categories.name}</option>
    //   <option value="Travel" >{user.categories.name}</option>
    //   <option value="Food">{user.categories.name} </option> */}
    // </select>

    // <div className="contain_list">
    //   <div className="Container_PL">
    //     <div className="List" >
    //       {/* <List List={list} handleDeleteItem={handleDeleteItem} /> */}
    //     </div>
    //   </div>
    //   <div className="card">
    //     {/* <Item List={list} /> */}
    //   </div>

    // </div>
    // <p></p>