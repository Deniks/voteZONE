import React from 'react';
import uuid from 'uuid';

const Poll = (props) => (
    <div className="poll">
    <div className="row">
        <div className="col s12 m6">
            <div className="card grey darken-4">
                <div className="card-content white-text">
                    <span className="card-title">{props.title}</span>
                    <p>{props.description}</p>
                    <form action="#">
                                {props.choices.map(choice => {
                                    const RadioBtn = (props) => {
                                        return (
                                            <label>
                                                <input name="group1" type="radio"/>
                                                 <span>{choice}</span>
                                            </label>
                                        );
                                    }
                                    let p = React.createElement('p', {key: uuid() }, <RadioBtn />)
                
                                    return p;
                                })}
                    </form>
                    <span className="right">{props.date}</span>

                </div>
                <div className="card-action">
                    <div>
                        {props.hashtags.map(el => {
                            let a = React.createElement(
                                'a',
                                null,
                                el
                            );
                            return <a>{el + '  '}</a>;
                        })}
                    </div>
                    {props.subscribeButton}
                </div>
            </div>
        </div>
    </div>
</div>
);

export default Poll;