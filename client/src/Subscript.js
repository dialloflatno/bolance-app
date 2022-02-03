import { useEffect, useState } from "react"

export default function Subscript({ user, company, startDate, payment }) {



  const subState = user.subscriptions
  console.log(subState);
  const [subscribed, setSubscribed] = useState(subState)
  const handleClick = () => {
    fetch(`/api/subscriptions/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subscribed: subscribed,
      }),
    })
      .then((r) => r.json())
      .then((subscribedStatus) => {
        console.log(subscribedStatus);
        setSubscribed(() => !subscribedStatus)

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
