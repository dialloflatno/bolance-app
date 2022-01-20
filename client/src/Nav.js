import Search from './Search'
import { useHistory, Link as a, Link } from 'react-router-dom'
import Profile from './Profile'

function Nav({user, setUser}) {
  const history = useHistory()
  function handleLogoutClick() {
    console.log('Save Your Coins!!')

    fetch('/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser('')
      }
    })
  }

  const titleBook = user.books

  //map through my users books for an title that matchs the e.target.value to redirect your to the books.id

  function handleRedirectClick(e) {
    const title = e.target.value
    console.log('Opening Book')
    const getBook = titleBook.find((book) => book.title == title).id
    console.log(getBook)
    history.push(`/books/${getBook}`)
    window.location.reload()
  }

  const dropDown = titleBook.map((book) => {
    // debugger
    return (
      <>
        <option>{book.title}</option>
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
                  <ul className="navUl">
                    <Link to="/">
                      <li className="logo">Bolance</li>
                    </Link>
                    <Search />
                    <Link to="/" className="dropgo-NAV">
                      Home
                    </Link>
                    <a onChange={handleRedirectClick} className="dropgo-NAV">
                      <select>
                        <option>Books</option>
                        {dropDown}
                      </select>
                    </a>
                    <Link to="/errors" className="dropgo-NAV ">
                      PMR
                    </Link>
                    <span className="name">{user.full_name}</span>
                    <Link
                      to="/logout"
                      className="dropgo-LOGOUT"
                      onClick={handleLogoutClick}>
                      Logout
                    </Link>
                    <div>
                    <Profile user ={user} />
                    </div>
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
          <div/>
        </div>
      </div>
    </div>
  )
}

export default Nav;
