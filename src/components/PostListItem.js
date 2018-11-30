import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({ title, subtitle, category, keywords, author, text, id }) => (
	<div>
		<Link to={`edit/${id}`}>
			<h3>{title}</h3>
		</Link>
		<h4>{subtitle}</h4>
		<p>by: {author}</p>
		<p>{category}</p>
		<p>{text}</p>
	</div>
);

export default PostListItem;
