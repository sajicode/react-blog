// Get visible posts
import moment from 'moment';

export default (posts, { text, sortBy, startDate, endDate }) => {
	return posts
		.filter((post) => {
			const createdAtMoment = moment(post.createdAt);
			const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
			const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
			const textMatch =
				post.text.toLowerCase().includes(text.toLowerCase()) ||
				post.category.toLowerCase().includes(text.toLowerCase());

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy === 'category') {
				return a.category < b.category ? -1 : 1;
			}
		});
};
