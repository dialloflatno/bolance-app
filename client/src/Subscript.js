
 export default function Subscript({ company ,startDate, payment,}) {


    return (

        <div className='sub-line'>
            <span className='dot'>-</span>
         <span>{company}</span>
         <br/>
         <span>Subscription Start Date :{startDate}</span>
         <br/>
         <span>Monthly Payment: ${payment}</span>
        </div>
    )
    
}