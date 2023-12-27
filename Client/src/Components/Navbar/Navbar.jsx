import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../Store/AuthProvider";

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header>
        <div className="container">
          {/* left side  */}
          <div className="logo-brand">
            <Link to="/" className="logo">
              MERN {""}Admin
            </Link>
          </div>

          {/* right side  */}
          <nav>
            <ul>
              <li>
                <NavLink to="/" className="links">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="links">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" className="links">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="links">
                  Contact
                </NavLink>
              </li>

              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout" className="links">
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register" className="links">
                      SignUp
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className="links">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
