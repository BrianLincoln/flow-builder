import React from 'react';

const EditInputAction = (props) => {
    EditInputAction.propTypes = {
        handleInputValueChange: React.PropTypes.func.isRequired,
        handleSelectorChange: React.PropTypes.func.isRequired,
        inputValue: React.PropTypes.string,
        selector: React.PropTypes.string
    };
    const handleInputValueChange = (event) => {
        props.handleInputValueChange(event.target.value);
    };
    const handleSelectorChange = (event) => {
        props.handleSelectorChange(event.target.value);
    };
    return (
        <div>
            <div className="form-group">
                <label htmlFor="field-type">Selector: </label>
                <input className="form-control" id="field-type" onChange={handleSelectorChange.bind(this)} type="text" value={props.selector} />
            </div>
            <div className="form-group">
                <label htmlFor="field-value">Input Value: </label>
                <input className="form-control" id="field-value" onChange={handleInputValueChange.bind(this)} type="text" value={props.inputValue} />
            </div>
        </div>
    );
};

export default EditInputAction;
