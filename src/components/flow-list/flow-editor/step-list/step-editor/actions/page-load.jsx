import React from 'react';

const SelectActionType = (props) => {
    SelectActionType.propTypes = {
        handleActionTypeChange: React.PropTypes.func.isRequired
    };
    const handleSelection = (event) => {
        console.log('handle thing');
        console.log(event);
        props.handleActionTypeChange(event.target.value);
    };
    return (
        <div>
            <label htmlFor="field-url">Choose Action:</label>
            <input id="field-url" onChange={handleSelection.bind(this)} type="text" />
        </div>
    );
};

export default SelectActionType;
