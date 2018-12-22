import React, { PureComponent } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { firebase } from '../firebase/firebase';

// let authorized = false;

// firebase.auth().onAuthStateChanged((user) => {
// 	if (user) {
// 		authorized = true;
// 	}
// });
class PostListItem extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			authorized: false
		};
	}

	componentDidMount = () => {
		this.handleAuthUser();
	};

	handleAuthUser = () => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState(() => ({
					authorized: true
				}));
			}
		});
	};

	render() {
		return (
			<div>
				{this.state.authorized ? (
					<Link className="list-item" to={`edit/${this.props.id}`}>
						<div>
							<h3 className="list-item__title">{this.props.title}</h3>

							<h4 className="list-item__sub-title">{this.props.subtitle}</h4>
							<span className="list-item__sub-title">
								by: {this.props.author} on {moment(this.props.createdAt).format('Do MMMM, YYYY')}
							</span>
							<p className="list-item__sub-title">{this.props.text}</p>
						</div>
					</Link>
				) : (
					<div className="list-item">
						<div>
							<h3 className="list-item__title">{this.props.title}</h3>

							<h4 className="list-item__sub-title">{this.props.subtitle}</h4>
							<span className="list-item__sub-title">
								by: {this.props.author} on {moment(this.props.createdAt).format('Do MMMM, YYYY')}
							</span>
							<p className="list-item__sub-title">{this.props.text}</p>
						</div>
					</div>
				)}
			</div>
		);
	}
}

// ({ title, subtitle, author, createdAt, text, id })

export default PostListItem;
