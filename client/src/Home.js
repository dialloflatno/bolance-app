// import Search from "./Search";
import Welcome from "./Welcome";
import SignIn from './SignIn'
import { NavLink } from "react-router-dom";



function Home() {

    return (
        <div>
            <header>
                    <nav className="navBar">
                        <span className="logo">Bolance</span>
                        <ul className="navUl">
                            {/* <Search /> */}
                            <div className='button-click'>
                          <NavLink to='/signin' exact >  
                          <button className="dropgo"> SignIn</button>
                          </NavLink>
                          <NavLink to='/signup' exact >
                            <button className="dropgo"> SignUp</button> 
                          </NavLink>
                            </div>  
                        </ul>
                    </nav>
            </header>
            <div>
            </div>
            <br/>
            {/* <SignIn />  */}
             <Welcome/>
             <footer>Bolance App | Your Best Budget ! </footer>

        </div>
    )
}

export default Home;