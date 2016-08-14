import React from 'react';

const SelectActionType = (props) => {
    SelectActionType.propTypes = {
        handleUrlFieldChange: React.PropTypes.func.isRequired,
        url: React.PropTypes.string
    };
    const handleChange = (event) => {
        props.handleUrlFieldChange(event.target.value);
    };
    return (
        <div>
            <label htmlFor="field-url">Url: </label>
            <input id="field-url" onChange={handleChange.bind(this)} type="text" value={props.url} />
        </div>
    );
};

export default SelectActionType;
