import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addPost } from './actions/posts';
import getVisiblePosts from './selectors/posts';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(
	addPost({
		title: 'Redux Rules',
		subtitle: 'Managing state complexity with Redux',
		category: 'redux',
		keywords: 'React, Front-end, redux',
		author: 'Dan Abramov',
		text: 'React states can be easily managed with setState, but what about increasingly complex applications?....'
	})
);

store.dispatch(
	addPost({
		title: 'Next.js',
		subtitle: 'Building and Deploying React apps faster',
		category: 'next',
		keywords: 'React, Front-end, Next.js',
		author: 'Michael',
		text: 'We know how difficult it is to set up react applications. Next.js comes to the rescue!!'
	})
);

store.dispatch(
	addPost({
		title: 'React for the win',
		subtitle: 'Building Reusable apps with React',
		category: 'react',
		keywords: 'React, Front-end',
		author: 'Sophia',
		text:
			'Efficiency is an important aspect of front-end web development especially with JavaScript. Incoming====React!!'
	})
);

// store.dispatch(setTextFilter('react'));

store.subscribe(() => {
	const state = store.getState();
	const visiblePosts = getVisiblePosts(state.posts, state.filters);

	console.log(visiblePosts);
});

console.log(store.getState());

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
