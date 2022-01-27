import { useState } from 'react'

function BookForm({ user, placeBook }) {
  const [title, setBooksTitle] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user.id)
    fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        user_id: user.id,
      }),
    })
      .then((r) => r.json())
      .then((info) => {
        placeBook(info)
        setBooksTitle('')
      })
  }

  return (
    <div>
      <form className="bookbind" onSubmit={handleSubmit}>
        <h3> Bookbinding</h3>
        <span className="bvpharse">Lets Start Budgeting </span>
        <h5 >Create your Book  </h5>
        <input
        value={title}
          onChange={(e) => setBooksTitle(e.target.value)}
          placeholder="Book Title"
        />
        <button type="submit">Shelf</button>
      </form>
    </div>
  )
}

export default BookForm
