import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startEditPost, startRemovePost } from '../actions/posts';

export class EditPostPage extends PureComponent {
	onSubmit = (post) => {
		this.props.startEditPost(this.props.post.id, post);
		this.props.history.push('/');
	};
	onRemove = () => {
		this.props.startRemovePost({ id: this.props.post.id });
		this.props.history.push('/');
	};
	render() {
		return (
			<div>
				<h1>Edit Post</h1>
				<PostForm post={this.props.post} onSubmit={this.onSubmit} />
				<button onClick={this.onRemove}>Remove</button>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	post: state.posts.find((post) => post.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
	startEditPost: (id, post) => dispatch(startEditPost(id, post)),
	startRemovePost: (data) => dispatch(startRemovePost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
