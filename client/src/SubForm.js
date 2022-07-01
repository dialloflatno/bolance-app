import { useState } from 'react'

function SubForm({ user ,open, onClose }) {
  const [company, setCompany] = useState('')
  const [month, setMonth] = useState('')
  const [subscribed, setSubscribed] = useState(true)
  const [paymentpermonth, setPaymentPermonth] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
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
        user_id: user.id,
      }),
    })
      .then((r) => r.json())
      .then((subscript) => {
        console.log(user);
        console.log('Am I Subscribed');
        console.log(subscript);
  
      })
  }
  if (!open) return null
  return (
    <div>
      <form className="bookbindSUB" onSubmit={handleSubmit}>
       <div> <h3> New Subcription </h3>
        <span className="bvpharse">Lets Add Subcription </span><button id='closeButton' onClick = {onClose}>X</button>
       </div>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder= "Company"
        />
        <input
          value={month}
          type="date"
          onChange={(e) => setMonth(() => e.target.value)}
          placeholder="Month"
        />
        <input
          value={paymentpermonth}
          type='number'
          onChange={(e) => setPaymentPermonth(() => e.target.value)}
          placeholder="Reacccuring Amount ex $10.00"
        />
        <div id ='sub-input'>
        Subscribed <input
        className='checkbox'
          value={subscribed}
          type ='checkbox'
          onChange={(e) => setSubscribed(() => e.target.value)}
          placeholder="COMING SOON"
        />
        </div>
        <button type="submit"> Add </button>
      </form>
            <div className='yellowSUB-background'></div>

    </div>
  )
}

export default SubForm
