import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Nav, NavItem, NavLink } from 'reactstrap';

const tabs = [{
    route: "/home",
    icon: faHome,
    label: "Home"
},{
    route: "/cart",
    icon: faCartShopping,
    label: "Cart"
},{
    route: "/profile",
    icon: faUser,
    label: "Profile"
}];

const Navigation = () => {
    return (
        <div>
            <nav className="navbar fixed-bottom navbar-dark" role="navigation">
                <Nav className="w-100">
                    <div className="d-flex flex-row justify-content-around w-100">
                        {
                            tabs.map((tab, index) => (
                                <NavItem key={`tab-${index}`}>
                                    <NavLink to={tab.route} className="nav-link">
                                        <div className="row d-flex flex-column justify-content-center align-items-center">
                                            <FontAwesomeIcon size="lg" icon={tab.icon} />
                                            <div>{tab.label}</div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </div>
                </Nav>
            </nav>
        </div>
    );
}

export default Navigation;