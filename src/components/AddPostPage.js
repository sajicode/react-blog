import React from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import { addPost } from '../actions/posts';

const AddPostPage = (props) => (
	<div>
		<h1>Add Post</h1>
		<PostForm
			onSubmit={(post) => {
				props.dispatch(addPost(post));
				props.history.push('/');
			}}
		/>
	</div>
);

export default connect()(AddPostPage);
