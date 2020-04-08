import React from 'react';
//stateless functional component
const NavBar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">
        NavBar {" "}
        <span className="badge badge-pill badge-secondary">
            {totalCounters}
            </span>
            </a>
        </nav>
     );

}


 
export default NavBar;