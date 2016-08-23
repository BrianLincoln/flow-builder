import React from 'react';

const SelectActionType = (props) => {
    SelectActionType.propTypes = {
        handleActionTypeChange: React.PropTypes.func.isRequired
    };
    const handleSelection = (event) => {
        props.handleActionTypeChange(event.target.value);
    };
    return (
        <select className="form-control"  id="action-types" onChange={handleSelection.bind(this)}>
            <option value="pageLoad">Load a page</option>
            <option value="input">Edit a field</option>
            <option value="click">Click on something</option>
            <option value="confirmElementExists">Check if an element exists</option>
        </select>
    );
};

export default SelectActionType;
