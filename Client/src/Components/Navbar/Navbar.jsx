import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {


  return (
    <>
    <header >
        <div className="container">
            {/* left side  */}
            <div className="logo-brand">
                <Link to="/">MERN_Admin</Link>
            </div>

            {/* right side  */}
              <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">SignUp</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
              </nav>
               
        </div>
    </header>
    
    
    
    </>
  )
}

export default Navbar
