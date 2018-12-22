import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startAddPost } from '../actions/posts';

export class AddPostPage extends PureComponent {
	onSubmit = (post) => {
		this.props.startAddPost(post);
		this.props.history.push('/');
	};
	render() {
		return (
			<div>
				<h1>Add Post</h1>
				<PostForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startAddPost: (post) => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(AddPostPage);
