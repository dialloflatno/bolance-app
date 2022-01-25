
import { NavLink } from 'react-router-dom'

function GreetNav() {
  return (
    <div>
      <header>
        <nav className="navBar">
          <span className="logo">Bolance</span>
          <ul className="navUl">
            <div className="button-click">
              <NavLink to="/signin" >
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
    </div>
  )
}

export default GreetNav
