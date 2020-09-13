import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from '../container/app'
import Home from '../component/Home';
import Counter from '../component/Counter';
import Result from '../component/OnlyResult';

import User from '../component/User';

const Routes = () => (
	<Router>
		<Route path={'/'} component={App} />
		<Switch>
			<Route exact path={'/'} component={Home}/>
			<Route path={'/counter'} component={Counter} />
			<Route path={'/result'} component={Result} />
			<Route path={'/user'} component={User}/>
		</Switch>
	</Router>
)

export default Routes;
