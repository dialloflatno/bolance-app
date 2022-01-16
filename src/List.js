import { useState } from "react";
import Info from "./Info";
import Map from './Map.js'


function List({ categoriesArr, handleDeleteItem, user }) {


const expenseList = 'Expenses Cleared'

console.log(expenseList);


  if(expenseList?.length < 4) {
    expenseList = categoriesArr?.map((r)=> { return (r.expense)})
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
    
          </div>
          <Map user={user} />

        </div>
      </div>
      <footer>Bolance App | Your Best Budget ! </footer>
    </div>
  );
}

export default List;