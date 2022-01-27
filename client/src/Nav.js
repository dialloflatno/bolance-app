import Search from './Search'
import { useState } from "react";
import { useHistory, Link } from 'react-router-dom'
import Profile from './Profile'

function Nav({ user, setUser, books }) {

  const [isOpen, setOpen] = useState(false)
  const [navtog, setNavTog] = useState(true)



  const history = useHistory()

  function handleLogoutClick() {
    console.log('Save Your Coins!!')

    fetch('/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser({})
        history.push('/signin')
      }
    })
  }


  function handleToggle() {
    setNavTog(false)
  }
  function handleTogglePostive() {
    setNavTog(true)
  }





  function handleRedirectClick(e) {
    const title = e.target.value
    console.log('Opening Book')
    const getBook = books.find((book) => book.title === title)
    console.log(getBook);
    const bookMatched = getBook?.id
    console.log(bookMatched)
    history.push(`/books/${bookMatched}`)
  }


 
  const dropDown = books?.map((book) => {
    return (
      <>

        <option index={book.id}>{book.title}</option>
      </>
    )
  })

  return (
    <div>
      <div className="conatier_size">
        <div>
          <span className="Contanier_BO">
            <div>
              <nav className="navBar">
                <div>
                  <ul className="navUl" >
                    <Link to="/">
                      <li className="logo">Bolance</li>
                    </Link>
                    <Search user={user} />
                    <Link to="/" className="dropgo-NAV">
                      Home
                    </Link>
                    <select className="dropgo-NAV" onChange={handleRedirectClick} >
                      <option>Books</option>
                      {dropDown}
                    </select>
                    <Link to="/errors" className="dropgo-NAV ">
                      PMR
                    </Link>
                    <span className="name">{user.full_name}
                      <button className="close" onClick={() => setOpen(true)}>
                        ⌄
                      </button>
                    </span>
                    <Link
                      to="/logout"
                      className="dropgo-LOGOUT"
                      onClick={handleLogoutClick}>
                      Logout
                    </Link>
                    <div>
                    </div>
                    <Profile back={handleTogglePostive}
                      handleToggle={handleToggle}
                       navtog={navtog}
                      // handleSubmit={profileUpdating}
                      // setEmail={setEmail}
                      // userName={setUsername}
                      // pass={setPassword}
                      open={isOpen}
                      close={() => setOpen(false)}
                      setOpen={setOpen}
                      user={user}
                      // username={username}
                      // email={email}
                      books={books} 
                      />
                  </ul>
                </div>
                <div className="stack">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div>
                <div></div>
              </nav>
            </div>
          </span>
          <div />
        </div>
      </div>
    </div>
  )
}

export default Nav;
