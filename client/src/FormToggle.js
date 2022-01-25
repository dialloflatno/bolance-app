import Form from "./Form";

export default  function FormToggle({setToggle, toggle, entryHandled, expDropDown, categoriesArr}) {


    function handlesApperacance() {
        setToggle(true)
      }
      function handlesDisapperacance() {
        setToggle(false)
      }
    


  return (
    <div>
      {toggle ? (
        <Form
          entryHandled={entryHandled}
          expDropDown={expDropDown}
          categoriesArr={categoriesArr}
          className="tranv"
        />
      ) : (
        ""
      )}
      {toggle ? (
        <button onClick={handlesDisapperacance} className="drpfrm">
          Place an Entry ▼
        </button>
      ) : (
        <button onClick={handlesApperacance} value={false} className="drpfrm">
           Place an Entry ▼
        </button>
      )}
    </div>
  );
}
