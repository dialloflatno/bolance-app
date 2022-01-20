import { useState } from "react";



export default function Profile({ handleSubmit,userName, pass, email, open, close, user }) {

const [navtog,setNavTog]=useState(true)

    function handleToggle() {
        setNavTog(false)  
    }


    
    if (!open) return null
    return (
        <div className='profileInfo'>
            <div>
                <button onClick={close} className='toggle-prp'> ⬅</button>
            </div>
            { navtog ? ( 
                       <><><h3>{user.username}</h3><label>name<span>{user.full_name}</span></label><label>email: <span>{user.email}</span></label><span aria-valuemax placeholder='*******'>password:****</span></><button onClick={handleToggle} className='profileUpdate'>Update Info</button></>
            ):(
                    <form onSubmit={handleSubmit}>
                        <input onChange={(e)=> userName(e.target.value)} placeholder='username' />
                        <input  onChange={(e)=> email(e.target.value)} placeholder='email' />
                        <input onChange={(e)=> pass(e.target.value)} placeholder='password' />
                        <button className='profileUpdate' type='submit'>Update Info</button>
                    </form>
                        )}
                        <br />
                        <span className='booksUser'>Your Book Pile:{user.books.length}</span>
                    </div>
                )
            }



