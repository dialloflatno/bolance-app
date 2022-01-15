import Info from "./Info";
import Map from './Map.js'


function List({ List, handleDeleteItem,user}) {



  // const mappedList = List.map(pmo => pmo.transactions.map(tmo => <Info
  //   key = {tmo.id}
  //   transactions ={tmo.transactions}
  //   handleDeleteItem={handleDeleteItem}
  //   Info ={tmo}

  // />
  // ))



  return (
    <div>
    <div className="List">
      <br></br>
      <div className='vhm'>
      <div className="base">
        {/* <h3>My Transaction Should Show Here</h3> */}
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
      </div>
      <Map user ={user}/>

    </div>
    </div>
      <footer>Bolance App | Your Best Budget ! </footer>
      </div>
  );
}

export default List;