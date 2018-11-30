import React from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import { editPost, removePost } from '../actions/posts';

const EditPostPage = (props) => (
	<div>
		<h1>Edit Post</h1>
		<PostForm
			post={props.post}
			onSubmit={(post) => {
				props.dispatch(editPost(props.post.id, post));
				props.history.push('/');
			}}
		/>
		<button
			onClick={(e) => {
				props.dispatch(removePost({ id: props.post.id }));
				props.history.push('/');
			}}
		>
			Remove
		</button>
	</div>
);

const mapStateToProps = (state, props) => {
	return {
		post: state.posts.find((post) => post.id === props.match.params.id)
	};
};

export default connect(mapStateToProps)(EditPostPage);
