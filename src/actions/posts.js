import uuid from 'uuid';

// Post ACTIONS

// ADD_POST
export const addPost = ({
	title = '',
	subtitle = '',
	category = '',
	keywords = '',
	author = '',
	text = '',
	createdAt = 0
} = {} = {
	type: 'ADD_POST',
	post: {
		id: uuid(),
		title,
		subtitle,
		category,
		keywords,
		author,
		text,
		createdAt
	}
});

// EDIT_POST
export const editPost = (id, updates) => ({
	type: 'EDIT_POST',
	id,
	updates
});

// REMOVE_POST
export const removePost = ({ id }) => ({
	type: 'REMOVE_POST',
	id
});
