import './layout.css';
import {Outlet, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faMagnifyingGlass, faUsers, faBasketballBall} from '@fortawesome/free-solid-svg-icons';

const Layout = () => {

  return(
  <>
      <div className='nav-bar'>
        <h1 className='logo'>Bucket Whiz</h1>
        <nav>
          <div className= "list">
              <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon id="home-icon" icon={faHome} color="#bcd8c1"/>
              </NavLink>
              <NavLink exact="true" activeclassname="active" className="team-link" to="/teams">
                <FontAwesomeIcon icon={faUsers} color="#bcd8c1" />
              </NavLink>
              <NavLink exact="true" activeclassname="active" className="position-link" to="/positions">
                <FontAwesomeIcon icon={faBasketballBall} color="#bcd8c1"/>
              </NavLink>
              <NavLink exact="true" activeclassname="active" className="search-link" to="/search">
                <FontAwesomeIcon icon={faMagnifyingGlass} color="#bcd8c1"/>
              </NavLink>
          </div>
        </nav>
      </div>
      <div>
      <Outlet />
      </div>
  </>
  )
};

export default Layout;