import React from 'react';

import { NavLink } from 'react-router-dom';

const Menu = (props) => {
	return (
		<div>
			<ul>
	            <li>
	                <NavLink to={'/'}>Home</NavLink>
	            </li>
	            <li>
	                <NavLink to={'/counter'}>Counter</NavLink>
	            </li>
	        </ul>
	    </div>
	);
}

export default Menu;
