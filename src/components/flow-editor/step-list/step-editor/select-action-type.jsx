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
        <div className="form-group">
            <select className="form-control" defaultValue={props.stepType} id="action-types" onChange={handleSelection.bind(this)} >
                <option value="pageLoad">Load a page</option>
                <option value="input">Edit a field</option>
                <option value="click">Click on something</option>
                <option value="confirmElementExists">Confirm an element exists</option>
            </select>
        </div>
    );
};

export default SelectActionType;
