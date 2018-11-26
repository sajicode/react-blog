import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header>
		<h1>React Blog</h1>
		<NavLink to="/" activeClassName="is-active" exact={true}>
			Home
		</NavLink>
		<NavLink to="/create" activeClassName="is-active">
			Create Post
		</NavLink>
		<NavLink to="/about" activeClassName="is-active">
			About Us
		</NavLink>
		<NavLink to="/contact" activeClassName="is-active">
			Contact us
		</NavLink>
	</header>
);

export default Header;
