import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class PostListFilters extends React.Component {
	state = {
		calendarFocused: null
	};

	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};

	onFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused }));
	};

	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	};

	onSortChange = (e) => {
		if (e.target.value === 'javascript' || 'php' || 'go' || 'css') {
			this.props.setTextFilter(e.target.value);
		} else if (e.target.value === 'date') {
			this.props.sortByDate();
		}
	};

	render() {
		return (
			<div>
				<input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
				<select value={this.props.filters.sortBy} onChange={this.onSortChange}>
					<option>Select Category</option>
					<option value="javascript">JavaScript</option>
					<option value="php">PHP</option>
					<option value="go">Golang</option>
					<option value="css">CSS</option>
					<option value="date">By Date</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					startDateId="start_date_input"
					endDate={this.props.filters.endDate}
					endDateId="end_date_input"
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					showClearDates={true}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	};
};

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	sortByDate: () => dispatch(sortByDate()),
	setStartDate: (startDate) => dispatch(setStartDate(startDate)),
	setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListFilters);
