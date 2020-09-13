import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

const Menu = () => {
	const location = useLocation();
	return (
		<div style={{margin: '10px 0'}}>
			<ul>
				<li> <NavLink to={'/'} activeClassName={location.pathname === '/' ? 'active' : 'none'}>Home</NavLink> </li>
				<li> <NavLink to={'/counter'}>Counter</NavLink> </li>
				<li> <NavLink to={'/result'}>Only Result</NavLink> </li>
				<li> <NavLink to={'/user'}>User (Hooks)</NavLink> </li>
			</ul>
		</div>
	)
}

export default Menu;
