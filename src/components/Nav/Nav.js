import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to="/wizard"> <button> Add Property </button> </Link>
            <Link to="/"> <button> Cancel </button> </Link>
        </nav> 
    )
}

export default Nav