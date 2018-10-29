import React, { Fragment } from 'react';

const Choices = (props) => (
    <Fragment>
        <a className="blue darken-4 waves-effect waves-light btn modal-trigger" href="#modal1">Setup choices</a>
        <div ref={props.modal} id="modal1" className="modal blue darken-4 modal-fixed-footer">
            <div  className="modal-content">
                <h4>Choices</h4>
                <a onClick={props.addChoice} className="right black btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                <div ref={props.modalContent}>
                    <div ref={props.modalChild}>
                        <textarea id="textarea" className="choice white-text materialize-textarea"></textarea>
                    </div>
                    <div>
                        <textarea id="textarea" className="choice white-text materialize-textarea"></textarea>
                    </div>
                </div>
            </div>
            <div className="modal-footer" onClick={props.writtenChoiceHandler}>
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Done</a>
            </div>
            <input name="choices" ref={props.newChoicesHandler} style={{ display: "none" }} /> 
        </div>
    </Fragment>
);

export default Choices;