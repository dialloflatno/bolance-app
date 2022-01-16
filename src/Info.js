



function Info({ handleDeleteItem, item, cost, store, store_address, payment,date}) {

    // const urlDelete = `/expenses/${info.id}`




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
                    <td><span>{date}</span></td>
                    <td> <span>{item}</span> </td>
                    <td><span>{payment}</span></td>
                    <td><span>${cost}</span></td>
                    <td><span>{store}</span></td>
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