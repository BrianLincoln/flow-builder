import React from 'react';

const EditInputAction = (props) => {
    EditInputAction.propTypes = {
        handleInputValueChange: React.PropTypes.func.isRequired,
        handleSelectorTypeChange: React.PropTypes.func.isRequired,
        handleSelectorValueChange: React.PropTypes.func.isRequired,
        inputValue: React.PropTypes.string,
        selectorType: React.PropTypes.string,
        selectorValue: React.PropTypes.string
    };
    const handleInputValueChange = (event) => {
        props.handleInputValueChange(event.target.value);
    };
    const handleSelectorTypeChange = (event) => {
        props.handleSelectorTypeChange(event.target.value);
    };
    const handleSelectorValueChange = (event) => {
        props.handleSelectorValueChange(event.target.value);
    };
    return (
        <div>
            <div>
                <label htmlFor="field-type">Selector Type: </label>
                <input id="field-type" onChange={handleSelectorTypeChange.bind(this)} type="text" value={props.selectorType} />
            </div>
            <div>
                <label htmlFor="field-value">Selector Value: </label>
                <input id="field-value" onChange={handleSelectorValueChange.bind(this)} type="text" value={props.selectorValue} />
            </div>
            <div>
                <label htmlFor="field-value">Input Value: </label>
                <input id="field-value" onChange={handleInputValueChange.bind(this)} type="text" value={props.inputValue} />
            </div>
        </div>
    );
};

export default EditInputAction;
