import React, { Fragment } from 'react';

const VotingLimit = (props) => (
    <Fragment>
        Voting Limit                                
        <div className="switch right">
            <label ref={this.label}>
                Off
                <input name="votingLimit" ref={this.limit} type="checkbox" onChange={this.onSwitch} />
                <span className="lever blue darken-4"></span>
                On
            </label>
        </div>
        <div ref={this.rangeZone} style={{display: "none"}}>
            <p ref={this.range} className="range-field">
                <input onChange={this.onProgressValueChange} type="range" id="test5" min="0" max="10000" />
            </p>
            <div className="input-field col s3 right">
                <input ref={this.maxVotingValue} style={{color: "#fff"}} id="icon_telephone" type="number" className="validate" />
                <label forhtml="icon_telephone">Max</label>
            </div>
            <div className="input-field col s3">
                <input ref={this.votingLimitCounter} disabled value="0" style={{color: "#fff"}} type="text"/>
            </div>
        </div>
    </Fragment>
);

export default VotingLimit;