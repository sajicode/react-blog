import React from 'react';
import moment from 'moment';

export default class PostForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: props.post ? props.post.title : '',
			subtitle: props.post ? props.post.subtitle : '',
			keywords: props.post ? props.post.keywords : '',
			author: props.post ? props.post.author : '',
			text: props.post ? props.post.text : '',
			createdAt: props.post ? moment(props.post.createdAt) : moment(),
			error: ''
		};
	}

	onTitleChange = (e) => {
		const title = e.target.value;
		this.setState(() => ({ title }));
	};

	onSubtitleChange = (e) => {
		const subtitle = e.target.value;
		this.setState(() => ({ subtitle }));
	};

	onKeywordChange = (e) => {
		const keywords = e.target.value;
		this.setState(() => ({ keywords }));
	};

	onAuthorChange = (e) => {
		const author = e.target.value;
		this.setState(() => ({ author }));
	};

	onTextChange = (e) => {
		const text = e.target.value;
		this.setState(() => ({ text }));
	};

	onSubmit = (e) => {
		e.preventDefault();

		if (
			!this.state.title ||
			!this.state.subtitle ||
			!this.state.keywords ||
			!this.state.author ||
			!this.state.text
		) {
			this.setState(() => ({ error: 'You need to enter required details' }));
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				title: this.state.title,
				subtitle: this.state.subtitle,
				keywords: this.state.keywords,
				author: this.state.author,
				text: this.state.text
			});
		}
	};

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Post Title"
						autoFocus
						value={this.state.title}
						onChange={this.onTitleChange}
					/>
					<input
						type="text"
						placeholder="Post Subtitle"
						value={this.state.subtitle}
						onChange={this.onSubtitleChange}
					/>

					<input
						type="text"
						placeholder="Enter Keywords"
						value={this.state.keywords}
						onChange={this.onKeywordChange}
					/>
					<input type="text" placeholder="Author" value={this.state.author} onChange={this.onAuthorChange} />
					<textarea
						placeholder="Enter the text for your post"
						value={this.state.text}
						onChange={this.onTextChange}
					/>
					<button>Add Post</button>
				</form>
			</div>
		);
	}
}
