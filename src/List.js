import { useState } from "react";
import Info from "./Info";
import Map from './Map.js'


function List({ user, listOfExpenses }) {


  const exp = listOfExpenses?.map((x) => { return (x) })
  console.log(exp);

  //return me each array that has a lenght value great the zero 
  //if the lenght value is less than zero return No Expense///

  let mappedList = 'No Expense'

  if (exp?.length > 0) {
    return (

      mappedList = exp?.map(row =>
        <Info
          key={row.id}
          item={row.item}
          cost={row.cost}
          store={row.store_name}
          store_address={row.store_address}
          date={row.created_at}
          payment={row.payment_type}
          Info={row}
        />))

      // mappedList = exp?.map(row => console.log(row))
    
  }


  // console.log(mappedList);


  return (
    <div>
      <div className="List">
        <br></br>
        <div className='vhm'>
          <div className="base">
            {mappedList}
          </div>
          <Map user={user} />

        </div>
      </div>
      <footer>Bolance App | Your Best Budget ! </footer>
    </div>
  );
}

export default List;