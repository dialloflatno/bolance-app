


export default function Profile({back, navtog, handleToggle, handleSubmit, userName, pass, email, open, close, user,books }) {

    
    if (!open) return null
    return (
        <div className='profileInfo'>
            <div>    
            </div>
            { navtog ? ( 
                                <><button onClick={close} className='toggle-prp'>▲</button><><><h3>{user.username}</h3><label>name:<span>{user.full_name}</span></label><label>email: <span>{user.email}</span></label><span placeholder='*******'>password:****</span></><button onClick={handleToggle} className='profileUpdate'>Update Info</button></></>
            ):(

                <><button onClick={back} className='toggle-prp'>⤌</button><form onSubmit={handleSubmit}>
                        <input onChange={(e) => userName(e.target.value)} placeholder='username' />
                        <input onChange={(e) => email(e.target.value)} placeholder='email' />
                        <input onChange={(e) => pass(e.target.value)} placeholder='password' />
                        <button className='updateME' onClick={close} type='submit'>Update Info</button>
                    </form></>
                        )}
                        <br />
                        <span className='booksUser'>Your Book Pile:{books.length}</span>
                    </div>
                )
            }



