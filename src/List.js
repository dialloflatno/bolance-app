import { useState } from "react";
import Info from "./Info";
import Map from './Map.js'


function List({ handleDeleteItem, user, listOfExpenses }) {


  const expenseList = 'Expenses Cleared'
  console.log(expenseList);


  if (listOfExpenses?.length > 0) {
return(listOfExpenses)
  }
  //   mappedList = newEntry.map(tmo =>
  //      <Info
  //   key={tmo.id}
  //   item={tmo.item}
  //   cost={tmo.cost}
  //   store={tmo.store_name}
  //   store_address={tmo.store_address}
  //   date ={tmo.created_at}
  //   payment={tmo.payment_type}
  //   handleDeleteItem={handleDeleteItem}
  //   Info={tmo}
  // />
  // ))}

  // console.log(mappedList);


  return (
    <div>
      <div className="List">
        <br></br>
        <div className='vhm'>
          <div className="base">
            {listOfExpenses}
          </div>
          <Map user={user} />

        </div>
      </div>
      <footer>Bolance App | Your Best Budget ! </footer>
    </div>
  );
}

export default List;