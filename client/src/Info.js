



function Info({ handleDeleteItem, item, cost, store, info, store_address, payment, date }) {

    const urlDelete = `/expenses/${info.id}`



    function Destory() {
        fetch(urlDelete, {
            method: "DELETE",
        })
            .then(() => handleDeleteItem(info));
    }



    return (

        <div className="List_font">

            <div className ='info'  >

                <p>
                    <span>{date}</span>
                    <span>{item}</span>
                    <span>{payment}</span>
                    <span>${cost}</span>
                    <span>{store}</span>
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

            <button className="delete" onClick={Destory} aria-atomic="true">REMOVE</button>
            </div>


        </div >
    )


}


export default Info;