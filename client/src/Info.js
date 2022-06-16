



function Info({ handleDeleteItem, item, cost, store, info, store_address, payment, date }) {

    const urlDelete = `/api/expenses/${info.id}`



    function Destory() {
        fetch(urlDelete, {
            method: "DELETE",
        })
            .then(() => {
                debugger
                handleDeleteItem(info)
            });
    }


    return (

        <div>

            <div className ='info'  >

                <p>
                    <span>{date}</span>
                    <span>{item}</span>
                    <span>{payment}</span>
                    <span>${cost}</span>
                    <span>{store}</span>

                </p>

            <button className="delete" onClick={Destory} aria-atomic="true">REMOVE</button>
            </div>


        </div >
    )


}


export default Info;