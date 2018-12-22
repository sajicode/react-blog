import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostListItem = ({ title, subtitle, author, createdAt, text, id }) => (
	<div>
		<Link to={`edit/${id}`}>
			<h3>{title}</h3>
		</Link>
		<h4>{subtitle}</h4>
		<p>
			by: {author} on {moment(createdAt).format('Do MMMM, YYYY')}
		</p>
		<p>{text}</p>
	</div>
);

export default PostListItem;
