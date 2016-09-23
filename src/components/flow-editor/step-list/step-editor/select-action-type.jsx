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
                <option value="pageLoad">Load page</option>
                <option value="input">Edit text field</option>
                <option value="click">Click on element</option>
                <option value="hover">Hover on element</option>
                <option value="confirmElementExists">Confirm element exists</option>
            </select>
        </div>
    );
};

export default SelectActionType;
