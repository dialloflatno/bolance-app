import Form from "./Form";

export default  function FormToggle({setToggle, toggle, entryHandled, expDropDown, categoriesArr}) {


  return (
    <div>
        <Form
          entryHandled={entryHandled}
          expDropDown={expDropDown}
          categoriesArr={categoriesArr}
          className="tranv"
        />
    </div>
  );
}
