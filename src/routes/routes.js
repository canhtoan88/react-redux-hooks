import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from '../container/app'
import Home from '../component/Home';
import Counter from '../component/Counter';

const Routes = () => {
	return (
		<Router>
			<Route path={'/'} component={App} />
			<Switch>
				<Route exact path={'/'} component={Home}/>
				<Route path={'/counter'} component={Counter} />
			</Switch>
		</Router>
	);
}

export default Routes;
