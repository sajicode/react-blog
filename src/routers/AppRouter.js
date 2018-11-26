import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import AddPostPage from '../components/AddPostPage';
import EditPostPage from '../components/EditPostPage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import FourOFourPage from '../components/FourOFourPage';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/create" component={AddPostPage} />
				<Route path="/edit/:id" component={EditPostPage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/contact" component={ContactPage} />
				<Route component={FourOFourPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
