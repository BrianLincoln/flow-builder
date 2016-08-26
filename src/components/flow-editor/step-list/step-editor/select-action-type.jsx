import React from 'react';

const SelectActionType = (props) => {
    SelectActionType.propTypes = {
        handleStepTypeChange: React.PropTypes.func.isRequired,
        stepType: React.PropTypes.string.isRequired
    };
    const handleSelection = (event) => {
        props.handleStepTypeChange(event.target.value);
    };
    return (
        <select className="form-control" defaultValue={props.stepType} id="action-types" onChange={handleSelection.bind(this)} >
            <option value="pageLoad">Load a page</option>
            <option value="input">Edit a field</option>
            <option value="click">Click on something</option>
            <option value="confirmElementExists">Check if an element exists</option>
        </select>
    );
};

export default SelectActionType;
