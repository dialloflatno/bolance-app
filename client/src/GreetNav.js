
import { NavLink } from 'react-router-dom'

function GreetNav() {
  return (
    <div>
      <header>
        <nav className="navBar">
          <span className="logo"><image><svg width="49" height="28" viewBox="0 0 259 239" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M259 119.342C259 185.064 201.021 238.342 129.5 238.342C57.9791 238.342 0 185.064 0 119.342C0 53.6199 57.9791 0.341797 129.5 0.341797C201.021 0.341797 259 53.6199 259 119.342Z" fill="white"/>
<path d="M67 53.0001H95V179H67V53.0001Z" fill="#141231"/>
<path d="M199.5 125.921C199.5 151.878 178.01 172.921 151.5 172.921C124.99 172.921 103.5 151.878 103.5 125.921C103.5 99.9631 124.99 78.9205 151.5 78.9205C178.01 78.9205 199.5 99.9631 199.5 125.921Z" fill="#141231"/>
</svg>
</image>
Bolance</span>
          <ul className="navUlBar">
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
    </div>
  )
}

export default GreetNav
