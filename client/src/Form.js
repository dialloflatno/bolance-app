import { useState } from "react";

function Form({ entryHandled, expDropDown ,categoriesArr}) {



    const [item, setItem] = useState("")
    const [storle, setStore] = useState("")
    const [cost, setCost] = useState("")
    const [date, setDate] = useState("")
    const[choice,setChoice] = useState('')
    const [payment, PaymentType] = useState("")




    // const choosen = titleBook.find(book => book.title == title).id

    const choosen = categoriesArr?.find(categoryName => categoryName.name == choice)




    const urlList = '/expenses'

    const handleItemChange = (e) => {

        const capitalize = () => e.target.value[0] + e.target.value.slice(1);
        if (0 > capitalize.length) {
            alert("input required")
        }
        else {
            setItem(capitalize)
        }


    }
    const handleStoreChange = (e) => {
        const capitalize = () => e.target.value[0] + e.target.value.slice(1);
        setStore(capitalize)
    }


    const handleCostChange = (e) => {
        const price = e.target.value;
        setCost(price)
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)

    }
    const handlePaymentChange = (e) => {
        console.log("PAYMENT CHOOSEN");
        PaymentType(e.target.value)
    }

    const handleEntry = (e) => {
        e.preventDefault();

        fetch(urlList, {
            method: "POST",
            headers: {
                "Content-Type": " application/json",
            },
            body: JSON.stringify(
                {
                    item: item,
                    cost: cost,
                    store_name: storle,
                    store_address: "InPlace",
                    payment_type: payment
                })
        })
            .then(res => res.json())
            .then(data => fetch('/cateo_transaction_reports',{
                method:"POST",
                headers:{
                    "Content-Type": " application/json",
                },
                body: JSON.stringify(
                    {
                        expense_id: data.id,
                        category_id: choosen?.id
                    })
                })).then((r)=>r.json())
                .then((cat_repo)=> console.log(cat_repo))


    }

console.log(expDropDown);

    return (
        <div className="mainForm">
            <fieldset>
                <legend>Add expense</legend>
                <form onSubmit={handleEntry} className="formEntry">
                    <input onChange={handleItemChange} className="Form" name="Item " placeholder="Ex:Tools">
                    </input>
                    <input onChange={handleStoreChange} className="Form" name="Store" placeholder="Ex:Lowe's">
                    </input>
                    <input onChange={handleDateChange} className="Form" type="date" name="Date" placeholder="Ex:02/20/30">
                    </input>
                    <select onChange={handlePaymentChange} className="Form" type="text" name="method" placeholder="Ex:AMEX/CASH/CRYPTO">
                        <option>PaymentType</option>
                        <option>Credit Card</option>
                        <option>Cash</option>
                        <option>Crypto</option>
                    </select>
                    <input onChange={handleCostChange} className="Form" type="number" name="Cost" min="0.01" step="0.01" max="2500" placeholder="Ex:$0.00">
                    </input>
                    <select onChange= {(e)=> setChoice(e.target.value)} id="dropdown">
                        <option>Category </option>
                        {expDropDown}
                    </select>
                    <button className='addButton' type='submit'>+</button>
                </form>
            </fieldset>
        </div>
    );
}

export default Form;