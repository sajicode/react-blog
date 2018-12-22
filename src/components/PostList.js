import React from 'react';
import { connect } from 'react-redux';
import selectPosts from '../selectors/posts';
import PostListItem from './PostListItem';

export const PostList = (props) => (
	<div className="content-container">
		<div className="list-header">
			<div className="show-for-mobile">Posts</div>
		</div>
		<div className="list-body">
			{props.posts.length === 0 ? (
				<p>No Posts</p>
			) : (
				props.posts.map((post, index) => {
					return <PostListItem key={post.id} {...post} />;
				})
			)}
		</div>
	</div>
);

const mapStateToProps = (state) => {
	return {
		posts: selectPosts(state.posts, state.filters)
	};
};

export default connect(mapStateToProps)(PostList);
