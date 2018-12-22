import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = () => (
	<header>
		<NavLink to="/dashboard">
			<h1>Dev Blog</h1>
		</NavLink>
		<NavLink to="/create">
			<h1>Add Post</h1>
		</NavLink>
		<button onClick={startLogout}>Logout</button>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
