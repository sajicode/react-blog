import React, { PureComponent } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class PostForm extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			title: props.post ? props.post.title : '',
			subtitle: props.post ? props.post.subtitle : '',
			author: props.post ? props.post.author : '',
			text: props.post ? props.post.text : '',
			createdAt: props.post ? moment(props.post.createdAt) : moment(),
			calendarFocused: false,
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

	onAuthorChange = (e) => {
		const author = e.target.value;
		this.setState(() => ({ author }));
	};

	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};

	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }));
	};

	onTextChange = (e) => {
		const text = e.target.value;
		this.setState(() => ({ text }));
	};

	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.title || !this.state.subtitle || !this.state.author || !this.state.text) {
			this.setState(() => ({ error: 'You need to enter required details' }));
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				title: this.state.title,
				subtitle: this.state.subtitle,
				author: this.state.author,
				createdAt: this.state.createdAt.valueOf(),
				text: this.state.text
			});
		}
	};

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form className="form" onSubmit={this.onSubmit}>
					{this.state.error && <p className="form__error">{this.state.error}</p>}
					<input
						type="text"
						placeholder="Post Title"
						autoFocus
						className="text-input"
						value={this.state.title}
						onChange={this.onTitleChange}
					/>
					<input
						type="text"
						placeholder="Post Subtitle"
						className="text-input"
						value={this.state.subtitle}
						onChange={this.onSubtitleChange}
					/>

					<input
						type="text"
						placeholder="Author"
						className="text-input"
						value={this.state.author}
						onChange={this.onAuthorChange}
					/>

					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
					/>

					<textarea
						placeholder="Enter the text for your post"
						className="textarea"
						value={this.state.text}
						onChange={this.onTextChange}
					/>
					<button className="button">Add Post</button>
				</form>
			</div>
		);
	}
}
