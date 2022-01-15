



function Info({ handleDeleteItem, info, category }) {

    // const urlDelete = `/transactions/${info.id}`




    // function Destory() {
    //     fetch(urlDelete, {
    //         method: "DELETE",
    //     })
    //         .then((r) => r.json())
    //         .then(() => handleDeleteItem(info));
    // }



    return (

        <div className="List_font">

            <a onClick={() => console.log("hey")}>

                <p>
                    <td><span>01/03/22</span></td>
                    <td> <span>Sneakers</span> </td>
                    <td><span>Cash</span></td>
                    <td><span>$40.00</span></td>
                    <td><span>Nike</span></td>
                    {/* <hr className="lenght"></hr> */}
                    {/* <div className="FOOD"> */}
                    {/* <thead>{category_name}</thead> */}
                    {/* <ul></ul> */}
                    {/* <hr className="lenght"></hr>
                    <div className="Outting">
                        {/* <thead>{category_name}</thead> */}
                    {/* <ul></ul>  */}
                    {/* </div> */}


                </p>

            </a>
            <button  className="delete" aria-atomic="true">REMOVE</button>


        </div >
    )


}


export default Info;