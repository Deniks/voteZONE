import React, { Fragment } from 'react';

const DateRange = (props) => (
    <Fragment>
        <i className="material-icons prefix">date_range</i>
        <input  name="finishDate" type="text" placeholder="Vote end date" className="white-text datepicker white-text" ref={this.date}/>
    </Fragment>
);

export default DateRange;