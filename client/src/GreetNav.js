
import { NavLink } from 'react-router-dom'

function GreetNav() {
  return (
    <div>
      <header>
        <nav className="navBar">
          <span className="logo">Bolance</span>
          <ul className="navUl">
            <div className="button-click">
              <NavLink exact to="/signin" >
                <button className="dropgo"> SignIn</button>
              </NavLink>
              <NavLink to="/signup" exact>
                <button className="dropgo"> SignUp</button>
              </NavLink>
            </div>
          </ul>
        </nav>
      </header>
      <div></div>
      <br/>
      <footer>Bolance App | Your Best Budget ! </footer>
    </div>
  )
}

export default GreetNav
