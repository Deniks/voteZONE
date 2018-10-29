import React from 'react'

const Description = (props) => (
    <div className="input-field col s12">
        <i className="material-icons prefix">description</i>
        <textarea name="description" id="textarea" className="white-text materialize-textarea" ref={props.description}></textarea>
        <label htmlFor="textarea">Description</label>
    </div>
)

export default Description;
