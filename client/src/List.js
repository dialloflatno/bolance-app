import Info from "./Info";


function List({ display,handleDeleteItem }) {


  const exp = display?.map((x) => { return (x) })
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
          info={row}
          handleDeleteItem={handleDeleteItem}
        />))
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
        </div>
      </div>
    </div>
  );
}

export default List;