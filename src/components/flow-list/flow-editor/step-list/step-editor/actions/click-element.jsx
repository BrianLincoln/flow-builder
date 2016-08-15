import React from 'react';

const ClickElementAction = (props) => {
    ClickElementAction.propTypes = {
        handleSelectorTypeChange: React.PropTypes.func.isRequired,
        handleSelectorValueChange: React.PropTypes.func.isRequired,
        selectorType: React.PropTypes.string,
        selectorValue: React.PropTypes.string
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
        </div>
    );
};

export default ClickElementAction;
