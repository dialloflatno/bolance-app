// import { useState } from "react";

function Search() {

const search = (e) => {
 const trackedInput = e.target.value;
 console.log(trackedInput);
}
    
    
    return (


        <div className='sBar'>
            <input className="SearchBar"  onChange = {search} name = "search">
           
            </input>
        </div>
    )
}
export default Search;