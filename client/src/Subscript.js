import { useEffect, useState } from "react"

export default function Subscript({ subOn, setListOfSubs, user, company, startDate, payment }) {

console.log(subOn);

  const [subscribed, setSubscribed] = useState(subOn)

  const handleClick = () => {
    fetch(`/api/subscriptions/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        subscribed: subscribed,
      }),
    })
      .then((r) => r.json())
      .then((subscribed) => {
                      setListOfSubs(subscribed)
                      setSubscribed((subscribed) => !subscribed)

      });

  }

  return (
    <div className="sub-line">

      <td className={subscribed ? 'dot' : 'dop'}> </td>
      <td>{company}</td>
      <td>{startDate}</td>
      <td> ${payment}</td>
      <td className={"subButton " + (subscribed ? 'green' : 'gray')}>{subscribed ? 'Subscribed' : 'UnSubscribed'}</td>
      <button onClick={handleClick}>{subscribed ? '' : ''}</button>

    </div>
  )
}
