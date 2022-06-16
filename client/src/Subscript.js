import { useState } from "react"

export default function Subscript({ subOn, setUpSub, user, company, startDate, payment,key }) {


  const [status, setStatus] = useState(false)

  const handleClick = (key) => {
    setStatus((subOn) => !subOn)
    fetch(`/api/subscriptions/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subscribed: status,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        // console.log(data);
        setUpSub(() => !data)
      });

  }

  return (
    <div className="sub-line">
      <td className={subOn ? 'dot' : 'dop'}> </td>
      <td>{company}</td>
      <td>{startDate}</td>
      <td> ${payment}</td>
      <td className={"subButton " + (subOn ? 'green' : 'gray')}>{ subOn ? 'Subscribed' : 'UnSubscribed'}</td>
      <button onChange = {(e) => console.log(e.target.value)}  onClick={() => handleClick(key)}>{ subOn ? '' : ''}</button>
    </div>
  )
}
