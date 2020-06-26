import React from 'react';

import { NavLink } from 'react-router-dom';

const Menu = (props) => {
	return (
		<div style={{margin: '10px 0'}}>
			<ul>
	            <li>
	                <NavLink to={'/'}>Home</NavLink>
	            </li>
	            <li>
	                <NavLink to={'/counter'}>Counter</NavLink>
	            </li>
	            <li>
	                <NavLink to={'/result'}>Only Result</NavLink>
	            </li>
	        </ul>
	    </div>
	);
}

export default Menu;
