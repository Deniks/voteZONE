import React, { Fragment } from 'react';

const VotingLimit = (props) => (
    <Fragment>
        Voting Limit                                
        <div className="switch right">
            <label ref={props.label}>
                Off
                <input name="votingLimit" ref={props.limit} type="checkbox" onChange={props.onSwitch} />
                <span className="lever blue darken-4"></span>
                On
            </label>
        </div>
        <div ref={props.rangeZone} style={{display: "none"}}>
            <p ref={props.range} className="range-field">
                <input onChange={props.onProgressValueChange} type="range" id="test5" min="0" max="10000" />
            </p>
            <div className="input-field col s3 right">
                <input ref={props.maxVotingValue} style={{color: "#fff"}} id="icon_telephone" type="number" className="validate" />
                <label forhtml="icon_telephone">Max</label>
            </div>
            <div className="input-field col s3">
                <input ref={props.votingLimitCounter} disabled value="0" style={{color: "#fff"}} type="text"/>
            </div>
        </div>
    </Fragment>
);

export default VotingLimit;