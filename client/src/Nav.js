import Search from './Search'
import { useState } from "react";
import { useHistory, Link } from 'react-router-dom'
import Profile from './Profile'

function Nav({ user, setUser, books ,isDarkMode,setIsDarkMode }) {

  const [isOpen, setOpen] = useState(false)
  const [navtog, setNavTog] = useState(true)

    function handleDarkModeClick() {
        setIsDarkMode((isDarkMode) => !isDarkMode);
    }


  const history = useHistory()

  function handleLogoutClick() {
    console.log('Save Your Coins!!')

    fetch('/api/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser('')
        history.push('/signin')
      }
    })
  }


  function handleToggle() {
    setNavTog((navtog) => !navtog)
  }
  function handleTogglePostive() {
    setNavTog((navtog) => !navtog)

  }


/// charming fuccbois  


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
                    <select className="dropgo-select" onChange={handleRedirectClick} >
                      <option>Books</option>
                      {dropDown}
                    </select>
                    <Link to='/reports' className="dropgo-NAV ">
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
                      open={isOpen}
                      close={() => setOpen(false)}
                      setOpen={setOpen}
                      user={user}
                      books={books} 
                      />
                      <button className = 'switchMode' onClick={handleDarkModeClick}>
                        {isDarkMode ? "   " : "  "}
                    </button>
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
