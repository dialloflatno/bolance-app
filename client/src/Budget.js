import { useEffect, useState } from "react";


export default function Budget({ budget, mySum, title ,category}) {

const bookTotal = mySum(category.map((x) => x.expenses.map((xe) => xe.cost)))
const [ alarm , setAlarm] = useState(true)
 
console.log(budget);
console.log(bookTotal);


useEffect(() => {
    if( bookTotal < budget){
        return setAlarm((alarm) => !alarm)
    }
},[])
console.log(alarm);




    return (

        <>
           <div className = 'budgetNotif'>
 { alarm ? <> <h5><div className='notify'>!</div>{title}:{budget} </h5></> : <h5>{title}:{budget}</h5> } 
           </div>


        </>
    )


    ///if the book value surpassed the budget that row will turn red
    //to alert the user that there passing their budget ////////
}