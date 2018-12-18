import uuid from 'uuid';
import database from '../firebase/firebase';

// Post ACTIONS

// ADD_POST
export const addPost = (post) => ({
	type: 'ADD_POST',
	post
});

export const startAddPost = (postData = {}) => {
	return (dispatch) => {
		const {
			title = '',
			subtitle = '',
			category = '',
			keywords = '',
			author = '',
			text = '',
			createdAt = 0
		} = postData;
		const post = { title, subtitle, category, keywords, author, text, createdAt };
		return database.ref('posts').push(post).then((ref) => {
			dispatch(
				addPost({
					id: ref.key,
					...post
				})
			);
		});
	};
};

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
