import React from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import { editPost, removePost } from '../actions/posts';

const EditPostPage = () => (
	<div>
		<h1>Edit Post</h1>
		<PostForm />
	</div>
);

export default EditPostPage;
