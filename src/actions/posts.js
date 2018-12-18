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

export const startEditPost = (id, updates) => {
	return (dispatch) => {
		return database.ref(`posts/${id}`).update(updates).then(() => {
			dispatch(editPost(id, updates));
		});
	};
};

// REMOVE_POST
export const removePost = ({ id } = {}) => ({
	type: 'REMOVE_POST',
	id
});

export const startRemovePost = ({ id } = {}) => {
	return (dispatch) => {
		return database.ref(`posts/${id}`).remove().then(() => {
			dispatch(removePost({ id }));
		});
	};
};

// SET_POSTS in order to display posts on homepage
export const setPosts = (posts) => ({
	type: 'SET_POSTS',
	posts
});

// START_SET_POSTS

export const startSetPosts = () => {
	return (dispatch) => {
		return database.ref('posts').once('value').then((snapshot) => {
			const posts = [];
			snapshot.forEach((childSnapshot) => {
				posts.push({
					id: childSnapshot.key,
					...childSnapshot.val()
				});
			});
			dispatch(setPosts(posts));
		});
	};
};
