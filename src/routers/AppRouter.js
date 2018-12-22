import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import AddPostPage from '../components/AddPostPage';
import EditPostPage from '../components/EditPostPage';
import FourOFourPage from '../components/FourOFourPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true} />
				<Route path="/dashboard" component={DashboardPage} />
				<PrivateRoute path="/create" component={AddPostPage} />
				<PrivateRoute path="/edit/:id" component={EditPostPage} />
				<Route component={FourOFourPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
