// import { useState } from "react";

function Search() {

const search = (e) => {
 const trackedInput = e.target.value;
 console.log(trackedInput);
}
    
    
    return (


        <div>
            <input className="SearchBar"  onChange = {search} name = "search">
           
            </input>
        </div>
    )
}
export default Search;