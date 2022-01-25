// import { useState } from "react";

function Search({user}) {

const search = (e) => {
 const trackedInput = e.target.value;
 console.log(user.books);
const booksOfUser = user.books.filter(book => book.lenght === trackedInput)
 console.log(booksOfUser);
}

    
    return (


        <div className='sBar'>
            <input className="SearchBar"  onChange = {search} name = "search">
           
            </input>
        </div>
    )
}
export default Search;