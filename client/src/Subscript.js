import { useEffect, useState } from "react"

export default function Subscript({ subOn, setUpSub, user, company, startDate, payment }) {


  const [status, setStatus] = useState()

  const handleClick = () => {
    setStatus((subOn)=> !subOn)
    fetch(`/api/subscriptions/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        subscribed: status,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        console.log(status);
        debugger
        setUpSub(() => data)
        debugger

      });

  }

  console.log(subOn);
  return (
    <div className="sub-line">

      <td className={subOn ? 'dot' : 'dop'}> </td>
      <td>{company}</td>
      <td>{startDate}</td>
      <td> ${payment}</td>
      <td className={"subButton " + ( subOn ? 'green' : 'gray')}>{subOn ? 'Subscribed' : 'UnSubscribed'}</td>
      <button onClick={handleClick}>{subOn ? '' : ''}</button>

    </div>
  )
}
