import { useState } from 'react'

function SubForm({ user, placeBook }) {
  const [company, setCompany] = useState('')
  const [month, setMonth] = useState('')
  const [subscribed, setSubscribed] = useState(true)
  const [paymentpermonth, setPaymentPermonth] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user.id)
    fetch('/api/subscriptions', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        company: company,
        month: month,
        paymentpermonth: paymentpermonth,
        subscribed: subscribed,
        user: user,
      }),
    })
      .then((r) => r.json())
      .then((info) => {
        console.log(info);
        placeBook(info)
        setCompany('')
        setMonth('')
      })
  }

  return (
    <div>
      <form className="bookbindSUB" onSubmit={handleSubmit}>
        <h3> New Subcription</h3>
        <span className="bvpharse">Lets Add Subcription </span>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="COMING SOON"
        />
        <input
          value={month}
          type="date"
          onChange={(e) => setMonth(e.target.value)}
          placeholder="COMING SOON"
        />
        <input
          value={paymentpermonth}
          type='number'
          onChange={(e) => setPaymentPermonth(e.target.value)}
          placeholder="COMING SOON"
        />
        <input
          value={subscribed}
          type ='checkbox'
          onChange={(e) => setSubscribed(e.target.value)}
          placeholder="COMING SOON"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default SubForm
