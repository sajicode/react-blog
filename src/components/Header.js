import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = () => (
	<header className="header">
		<div className="content-container">
			<div className="header__content">
				<NavLink to="/dashboard">
					<h1 className="header__title">Dev Blog</h1>
				</NavLink>
				<NavLink to="/create">
					<h1 className="header__title">Add Post</h1>
				</NavLink>
				<button className="button button--link" onClick={startLogout}>
					Logout
				</button>
			</div>
		</div>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
