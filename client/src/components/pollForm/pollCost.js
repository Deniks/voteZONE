import React from 'react';

const PollCost = (props) => (
    <div className="switch right">
        <label ref={props.label}>
            For free
            <input ref={props.limit} type="checkbox" onChange={props.onSwitch} />
            <span className="lever blue darken-4"></span>
            Bill
        </label>
    </div>
);

export default PollCost;