import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class PostListFilters extends PureComponent {
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

	render() {
		return (
			<div className="content-container">
				<h1 className="page-header__title">Dev Posts</h1>
				<div className="input-group">
					<div className="input-group__item">
						<input
							type="text"
							className="text-input"
							placeholder="Search posts"
							value={this.props.filters.text}
							onChange={this.onTextChange}
						/>
					</div>

					<div className="input-group__item">
						<DateRangePicker
							startDate={this.props.filters.startDate}
							startDateId="startDateInput"
							endDate={this.props.filters.endDate}
							endDateId="endDateInput"
							onDatesChange={this.onDatesChange}
							focusedInput={this.state.calendarFocused}
							onFocusChange={this.onFocusChange}
							showClearDates={true}
							numberOfMonths={1}
							isOutsideRange={() => false}
						/>
					</div>
				</div>
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
