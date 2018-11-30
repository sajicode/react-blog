import React from 'react';
import PostList from './PostList';
import PostListFilters from './PostListFilters';

const HomePage = () => (
	<div>
		<PostListFilters />
		<PostList />
	</div>
);

export default HomePage;
