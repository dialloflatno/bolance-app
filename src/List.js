import Info from "./Info";
import Map from './Map.js'


function List({ newEntry, handleDeleteItem, user }) {



  const mappedList = 'Expenses Cleared'

  if(newEntry.lenght > 0) { return(

    mappedList = newEntry.map(tmo =>
       <Info
    key={tmo.id}
    item={tmo.item}
    cost={tmo.cost}
    store={tmo.store_name}
    store_address={tmo.store_address}
    date ={tmo.created_at}
    payment={tmo.payment_type}
    handleDeleteItem={handleDeleteItem}
    Info={tmo}
  />
  ))}
    
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