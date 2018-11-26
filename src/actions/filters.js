// Filter Actions

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

// SORT_BY_DATE
export const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

// SORT_BY_CATEGORY
export const sortByCategory = () => ({
	type: 'SORT_BY_CATEGORY'
});
