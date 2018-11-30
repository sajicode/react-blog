import React from 'react';
import { connect } from 'react-redux';
import selectPosts from '../selectors/posts';
import PostListItem from './PostListItem';

const PostList = (props) => (
	<div>
		<h1>Post List</h1>
		{props.posts.map((post, index) => {
			return <PostListItem key={index} {...post} />;
		})}
	</div>
);

const mapStateToProps = (state) => {
	return {
		posts: selectPosts(state.posts, state.filters)
	};
};

export default connect(mapStateToProps)(PostList);
