// Get visible posts

export default (posts, { text, sortBy }) => {
	return posts
		.filter((post) => {
			const textMatch =
				post.text.toLowerCase().includes(text.toLowerCase()) ||
				post.category.toLowerCase().includes(text.toLowerCase());

			return textMatch;
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy === 'category') {
				return a.category < b.category ? -1 : 1;
			}
		});
};
