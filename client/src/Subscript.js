import { useState } from "react"

export default function Subscript({ company, startDate, payment }) {
  const [subscribed,setSubscribed] = useState(true)
  
  const handleClick = () => {
    setSubscribed((subscribed) => !subscribed )
  }
  
  return (
    <div className="sub-line">
     
          <td className={subscribed ? 'dot' : 'dop'}> </td>
          <td>{company}</td>
          <td>{startDate}</td>
          <td> ${payment}</td>
      <td className ={ "subButton " + (subscribed ? 'green': 'gray') }>{subscribed ? 'Subscribed':'UnSubscribed'}</td>
      <button onClick = {handleClick}>{subscribed? '': ''}</button>
    
    </div>
  )
}
