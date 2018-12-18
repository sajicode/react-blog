import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { editPost, startRemovePost } from '../actions/posts';

export class EditPostPage extends React.Component {
	onSubmit = (post) => {
		this.props.editPost(this.props.post.id, post);
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
	editPost: (id, post) => dispatch(editPost(id, post)),
	startRemovePost: (data) => dispatch(startRemovePost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);

// old version

// const EditPostPage = (props) => (
// 	<div>
// 		<h1>Edit Post</h1>
// 		<PostForm
// 			post={props.post}
// 			onSubmit={(post) => {
// 				props.dispatch(editPost(props.post.id, post));
// 				props.history.push('/');
// 			}}
// 		/>
// 		<button
// 			onClick={(e) => {
// 				props.dispatch(removePost({ id: props.post.id }));
// 				props.history.push('/');
// 			}}
// 		>
// 			Remove
// 		</button>
// 	</div>
// );
