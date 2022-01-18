import { useState } from "react";




function BookForm({user,placeBook}) {
 
    const [title,setBooksTitle] = useState('')
    const [user_id,setUser] = useState(user.id)

    const handleSubmit = (e) => {
    e.preventDefault()
console.log(user.id);
    fetch('/books', { 
        method:'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            
            title: title,
            user_id: user_id
        
        }),
        })
        .then((r) => r.json())
        .then((info) => placeBook(info))
    };
        



    return (

        <div>
            <form className='bookbind' onSubmit={handleSubmit}>
                <span> Bookbinding</span>
                <span className='bvpharse'>Add new book below </span>
                <input onChange = {(e) => setBooksTitle(e.target.value)} placeholder='Book Title'/>
                <button type='submit'>Shelf</button>
            </form>

        </div>
    )

}

export default BookForm;