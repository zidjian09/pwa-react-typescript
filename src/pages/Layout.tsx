import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCartShopping, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import '../styles/Layout.css';
// import { Navbar, Container, Nav } from "react-bootstrap";
// import { Nav, NavItem, NavLink } from 'reactstrap';

const tabs = [{
  id: 1,
  route: "/",
  icon: faHome,
  label: "Home"
}, {
  id: 2,
  route: "/cart",
  icon: faCartShopping,
  label: "Cart"
}, {
  id: 3,
  route: "/profile",
  icon: faUser,
  label: "Profile"
}, {
  id: 4,
  route: "/search",
  icon: faSearch,
  label: "Search"
},
];

const Layout = () => {
  const [activeLink, setActiveLink] = useState(1);

  return (
    <>
      <nav className="navbar fixed-bottom navbar-light bg-custom navbar-expand shadow-lg" role="navigation">
        <div className="container">
          <div className="collapse navbar-collapse flex-row justify-content-evenly w-100">
            <ul className="navbar-nav">
              {
                tabs.map((tab, index) => (
                  <li className="nav-item mx-4" key={index} onClick={() => setActiveLink(tab.id)}>
                    <Link to={tab.route} className={"nav-link" + (tab.id === activeLink ? " active" : "")}>
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <FontAwesomeIcon size="lg" icon={tab.icon} />
                        <div>{tab.label}</div>
                      </div>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;