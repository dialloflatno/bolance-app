import Search from './Search'
import { useState } from "react";
import { useHistory, Link } from 'react-router-dom'
import Profile from './Profile'

function Nav({ user, setUser, books ,isDarkMode,setIsDarkMode }) {

  const [isOpen, setOpen] = useState(false)
  const [navtog, setNavTog] = useState(true)

    // function handleDarkModeClick() {
    //     setIsDarkMode((isDarkMode) => !isDarkMode);
    // }


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
            <div>
              <nav className="navBar">
                <div>
                  <ul className="navUl" >
                    <Link to="/">
                      <li className="logo"><image><svg width="49" height="28" viewBox="0 0 259 239" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M259 119.342C259 185.064 201.021 238.342 129.5 238.342C57.9791 238.342 0 185.064 0 119.342C0 53.6199 57.9791 0.341797 129.5 0.341797C201.021 0.341797 259 53.6199 259 119.342Z" fill="white"/>
<path d="M67 53.0001H95V179H67V53.0001Z" fill="#141231"/>
<path d="M199.5 125.921C199.5 151.878 178.01 172.921 151.5 172.921C124.99 172.921 103.5 151.878 103.5 125.921C103.5 99.9631 124.99 78.9205 151.5 78.9205C178.01 78.9205 199.5 99.9631 199.5 125.921Z" fill="#141231"/>
</svg>
</image>Bolance</li>
                    </Link>
                    {/* <Search user={user} /> */}
                    <Link to="/" className="dropgo-NAV">
                    <image><svg width="29" height="18" viewBox="0 0 85 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 28L44 0L85 28V98H0V28Z" fill="white"/>
</svg></image>
  Home
                    </Link>
                    <select className="dropgo-select" onChange={handleRedirectClick} >
                    <image><svg width="29" height="18" viewBox="0 0 130 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H55C60.5228 0 65 4.47715 65 10V70L0 68V0Z" fill="white"/>
<path d="M65 10C65 4.47715 69.4772 0 75 0H130V68L65 70V10Z" fill="white"/>
<rect x="13" y="22" width="39" height="4" rx="2" fill="#0B0707"/>
<rect x="77" y="22" width="39" height="4" rx="2" fill="#0B0707"/>
<rect x="13" y="33" width="39" height="4" rx="2" fill="#0B0707"/>
<rect x="77" y="33" width="39" height="4" rx="2" fill="#0B0707"/>
<rect x="13" y="44" width="39" height="4" rx="2" fill="#0B0707"/>
<rect x="77" y="44" width="39" height="4" rx="2" fill="#0B0707"/>
</svg>
</image> <option>Books</option>
                      {dropDown}
                    </select>
                    <Link to='/reports' className="dropgo-NAV ">
                    <image><svg width="29" height="18" viewBox="0 0 130 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H55C60.5228 0 65 4.47715 65 10V70L0 68V0Z" fill="white"/>
<path d="M65 10C65 4.47715 69.4772 0 75 0H130V68L65 70V10Z" fill="white"/>
<rect x="13" y="22" width="39" height="4" rx="2" fill="#0B0707"/>
<rect x="77" y="22" width="39" height="4" rx="2" fill="#0B0707"/>
<rect x="13" y="33" width="39" height="4" rx="2" fill="#0B0707"/>
<rect x="77" y="33" width="39" height="4" rx="2" fill="#0B0707"/>
<rect x="13" y="44" width="39" height="4" rx="2" fill="#0B0707"/>
<rect x="77" y="44" width="39" height="4" rx="2" fill="#0B0707"/>
</svg>
</image> PMR
                    </Link>
                    {/* <span className="name">{user.full_name} */}
                      <button className="close" onClick={() => setOpen(true)}>
                        ⌄
                      </button>
                  
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


                      <br/>
                  <Link
                      to="/logout"
                      className="dropgo-LOGOUT"
                      onClick={handleLogoutClick}>
                      Logout
                    </Link>
                  </ul>
                </div>
                {/* <div className="stack">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div> */}
                <div></div>
              </nav>
            </div>
          {/* </span> */}
          <div />
        </div>
      </div>
    </div>
  )
}






export default Nav;
