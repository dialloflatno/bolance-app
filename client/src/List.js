import Info from "./Info";


function List({ arrayOfExpenses,handleDeleteItem,handleReportListClick,categoriesDropDown}) {

console.log(arrayOfExpenses);

  let mappedList = ['Choose Your Category']

  if (arrayOfExpenses?.length > 0) {
    return (

      mappedList = arrayOfExpenses?.map(row =>
        <Info
          key={row.id}
          item={row.item}
          cost={row.cost}
          store={row.store_name}
          store_address={row.store_address}
          date={row.created_at}
          // dateMade ={}
          payment={row.payment_type}
          info={row}
          handleDeleteItem={handleDeleteItem}
        />))
  }

  

  // console.log(mappedList);


  return (
    <div> 
    <div className =' list-expense'>
    <select
      onChange={handleReportListClick}
      className="category-dropdown">
      <label value={null}> Choose</label>
      <option value={null} display="All">
        All
      </option>
      {categoriesDropDown}
    </select>
  </div>
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