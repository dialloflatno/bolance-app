import { useState } from "react"



export default function Profile({ 
    back, navtog, handleToggle, setOpen,open, user, books, close }) {

        const [username, setUsername] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
      



  function profileUpdating(e) {
    e.preventDefault()
    fetch(`/api/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        setEmail(email)
        setPassword(password)
        setUsername(username)
        setOpen(() => !data)

      }
      )

  }


    if (!open) return null
    return (
        <div className='profileInfo'>
            <div>
            </div>
            {navtog ? (
                <><button onClick={close} className='toggle-prp'>▲</button><>
                    <><h3>{user.username}</h3>
                        <label>name:<span>{user.full_name}</span>
                        </label><label>email: <span>{user.email}
                        </span></label>
                        <span placeholder='*******'>password:****</span>
                    </><button onClick={handleToggle} className='profileUpdate'>Update Info</button></></>
            ) : (

                <><button onClick={back} className='toggle-prp'>⤌</button>
                    <form onSubmit={profileUpdating}>
                        <input onChange={(e) => setUsername(e.target.value)} value ={username} placeholder='username' />
                        <input onChange={(e) => setEmail(e.target.value)} value ={email} placeholder='email' />
                        <input 
                        onChange={(e) => setPassword(e.target.value)} 
                        value ={password} 
                        placeholder='password' 
                        />
                        <button className='updateME' type='submit'>Update Info</button>
                    </form></>
            )}
            <br />
            <span className='booksUser'>Your Book Pile:{books?.length}</span>
        </div>
    )
}



