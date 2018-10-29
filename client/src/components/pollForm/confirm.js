import React, { Fragment } from 'react';

const Confirm = (props) => (
    <Fragment>
        <button className="bottom btn waves-effect waves-light blue darken-4 right" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
        </button>
    </Fragment>
);

export default Confirm;