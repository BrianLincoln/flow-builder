import React from 'react';

const PageLoadAction = (props) => {
    PageLoadAction.propTypes = {
        handleUrlFieldChange: React.PropTypes.func.isRequired,
        url: React.PropTypes.string
    };
    const handleChange = (event) => {
        props.handleUrlFieldChange(event.target.value);
    };
    return (
        <div className="form-group">
            <label htmlFor="field-url">Url: </label>
            <input className="form-control" id="field-url" onChange={handleChange.bind(this)} type="text" value={props.url ? props.url : ''} />
        </div>
    );
};

export default PageLoadAction;
