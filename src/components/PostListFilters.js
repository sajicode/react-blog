import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate } from '../actions/filters';

const PostListFilters = (props) => (
	<div>
		<input
			type="text"
			value={props.filters.text}
			onChange={(e) => {
				props.dispatch(setTextFilter(e.target.value));
			}}
		/>
		<select
			value={props.filters.sortBy}
			onChange={(e) => {
				if (e.target.value === 'javascript' || 'php' || 'go' || 'css') {
					props.dispatch(setTextFilter(e.target.value));
				} else if (e.target.value === 'date') {
					props.dispatch(sortByDate());
				}
			}}
		>
			<option>Select Category</option>
			<option value="javascript">JavaScript</option>
			<option value="php">PHP</option>
			<option value="go">Golang</option>
			<option value="css">CSS</option>
			<option value="date">By Date</option>
		</select>
	</div>
);

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	};
};

export default connect(mapStateToProps)(PostListFilters);
