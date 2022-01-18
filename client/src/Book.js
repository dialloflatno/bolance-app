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
    const [book, setBook] = useState('')
    const [name, setCategoryName] = useState('')
    const [newTitle, setNewTitle] = useState('')
    const [categoryOfBook, setMatch] = useState('')
    const [toggle, setToggle] = useState('')
    const [update, setUpdate] = useState(false)
    const [listOfExpenses, setList] = useState('')
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




    const categoriesArr = book?.categories;
    const labels = categoriesArr?.map((o) => o.name)
    /// dataList = [202,20,1]
    const dataListOfCosts = categoriesArr?.map((o) => o.expenses?.map((x) => x.cost))
    /// dataList = [[202],[20],[1]] <<<----- What im getting
    // debugger

    let dataList = ''
    if (dataListOfCosts?.length < 0) {
        dataList = dataListOfCosts.map((o) => o.reduce((prev, curr) => prev + curr))
    }
    let valueCost = ''

    if (dataListOfCosts?.length < 0) {
        valueCost = dataListOfCosts?.reduce((prev, curr) => prev + curr).split(",");
    }
    console.log(parseInt(valueCost));
    const expense = parseInt(valueCost)



    //// POST to Category the POST to BookCategory//////////////////

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
            .then((info) => fetch('/book_categories', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    category_id: info.id,
                    book_id: book_id
                }),
            })
                .then((r) => r.json())
                .then((match) => setMatch(match))
            )
    }




    /////PATCH ____

    function handleUpdatedName(e) {
        e.preventDefault()


        fetch(`/books/${book_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: newTitle
            })
        })
            .then(r => r.json())
            .then(data => setBook(data))

    }



    //// OLD WAY---------vvvvvvvvvvvvvvvvv------------------

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     fetch('/categories', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify({

    //             name: name,
    //             book_id: book_id

    //         }),
    //     })
    //     .then((r) => r.json())
    //     .then((info) => setPlaceCategory(info))

    //     fetch('/book_categories', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             category_id: category_id.id,
    //             book_id: book_id
    //         }),
    //     })
    //     .then((r) => r.json())
    //     .then((match) => setMatch(match))
    // };

    //// POST to Category the POST to BookCategory//////////////////




    function handleReportListClick(e) {
        const category = e.target.value;
        console.log('rescrusive list');
        const showExpenses = categoriesArr?.find(categoryName => categoryName.name == category)
        console.log(showExpenses.id);
        setList(showExpenses);
    }

    const display = listOfExpenses.expenses
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



    return (

        <>
            <Nav user={user} setUser={setUser} book={book} />
            <div className='bckg'>
                <div className="page_lay">
                    {toggle ?
                        (<Form entryHandled={entryHandled} className='tranv' expDropDown={expDropDown} categoriesArr={categoriesArr} />) : ('')
                    }
                    {toggle ?
                        (
                            <button onClick={handlesDisapperacance} className='drpfrm-close'>▼</button>
                        ) : (
                            <button onClick={handlesApperacance} className='drpfrm'>▼</button>)
                    }

                    {toggle ?
                        (<label className="perTitle" ><form id="titlePATCH" onSubmit={handleUpdatedName} ><input placeholder='new title' type="text" onChange={(e) => setNewTitle(e.target.value)} /></form> {expense ? expense : 'Great Work Budgeting !'}</label>
                        ) : (
                            <label className="perTitle" ><h6>{book?.title}</h6>  | <h9>{expense ? expense : 'Great Work Budgeting !'}</h9></label>
                        )}
                    <form onSubmit={handleSubmit} className='cats'>
                        <input placeholder=' new category' onChange={(e) => setCategoryName(e.target.value)} />
                        <button className='ahd' type='submit'>ADD</button>
                    </form>
                </div>
                <div>
                    <TotalExp labels={labels} dataList={dataList} />
                </div>
            </div>

            <select onChange={handleReportListClick} className="category-dropdown">
                <option value="All" display="All">All</option>
                {expDropDown}
            </select>
            <div>
                <List user={user} categoriesArr={categoriesArr} listOfExpenses={display} />
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