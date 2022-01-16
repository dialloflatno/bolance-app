import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import TotalExp from "./TotalExp";
import List from "./List";
import Form from "./Form";
import Map from "./Map";
// import Item from "./Item"
// import TotalExp from "./TotalExp";

function Book({ user, setUser }) {

    const { book_id } = useParams()


    const url = `/books/${book_id}`;
    const [book, setBook] = useState()
    const [name, setCategoryName] = useState('')
    const [categoryOfBook, setMatch] = useState('')
    const [category_id, setPlaceCategory] = useState('')
    const [toggle, setToggle] = useState('')
    const [newEntry, setNewEntry] = useState('')

    function handlesApperacance() {
        setToggle(true)
    }
    function handlesDisapperacance() {
        setToggle(false)
    }
    console.log(name);
    useEffect(() => {
        fetch(url)
            .then(r => r.json())
            .then(shelf => setBook(shelf))
    }, [])



    let expense = 'Great Work Budgeting !'


    /// Categories show with this one vvvvvv
    // console.log(book.categories);

    // const reducer = (prev,current) => prev + current

    const categoriesArr = book?.categories;


    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/categories', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({

                name: name,
                book_id: book_id

            }),
        })
            .then((r) => r.json())
            .then((info) => setPlaceCategory(info))

        fetch('/book_categories', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                category_id: category_id.id,
                book_id: book_id
            }),
        })
            .then((r) => r.json())
            .then((match) => setMatch(match))
    };




    // console.log(category_id.id);

    //BOOK Drop DOWN Menu



    // const catList = categoryOfBook?.map(category => {

    //     return (
    //         <>
    //             <option >{category.name}</option>
    //         </>
    //     )
    // })

    // console.log(categoryDropDown);




    // if (book.length > 0) {

    //   expense = book.map(bookx => {
    //         return (
    //             bookx.categories.map(category => { return category.expenses.map(t => { return (t.cost) }) })
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


    function entryHandled(entry) {
        console.log("new entry slotted");;
        setNewEntry(entry);
    }


    const expDropDown = categoriesArr?.map((n) => {
        return (
            <>
                <option>{n.name}</option>
            </>
        )
    })

    // const expDropDown = categoriesArr?.map((n) => {
    //     return (
    //         <>
    //             <option>{n.name}</option>
    //         </>
    //     )
    // })



    return (

        <>
            <Nav user={user} setUser={setUser} book={book} />
            <div className='bckg'>

                <div className="page_lay">

                    {toggle ?
                        (<Form entryHandled={entryHandled} expDropDown = {expDropDown} />) : ('')
                    }
                    {toggle ?
                        (
                            <button onClick={handlesDisapperacance} className='drpfrm-close'>▼</button>
                        ) : (
                            <button onClick={handlesApperacance} className='drpfrm'>▼</button>)
                    }

                    <label className="perTitle">{book?.title} | {expense ? expense : 'Great Work Budgeting !'}</label>

                    <form onSubmit={handleSubmit} className='cats'>
                        <input placeholder=' new category' onChange={(e) => setCategoryName(e.target.value)} />
                        <button className='ahd' type='submit'>ADD</button>
                    </form>
                </div>
                <div>
                    <TotalExp categoriesArr={categoriesArr} />
                </div>
            </div>

            <select onChange= {(e)=> console.log(e.target.value)} className="category-dropdown">
                <option value="All" display="All">All</option>
                {expDropDown}
            </select>
            <div>
                <List user={user} newEntry={newEntry} />
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