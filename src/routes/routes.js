import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from '../container/app'
import Home from '../component/Home';
import Counter from '../component/Counter';
import Result from '../component/OnlyResult';

const Routes = () => {
	return (
		<Router>
			<Route path={'/'} component={App} />
			<Switch>
				<Route exact path={'/'} component={Home}/>
				<Route path={'/counter'} component={Counter} />
				<Route path={'/result'} component={Result} />
			</Switch>
		</Router>
	);
}

export default Routes;
