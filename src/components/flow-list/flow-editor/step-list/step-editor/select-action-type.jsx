import React from 'react';

const SelectActionType = (props) => {
    SelectActionType.propTypes = {
        handleActionTypeChange: React.PropTypes.func.isRequired
    };
    console.log(props);
    return (
        <div>
            <h3>What should happen?</h3>
            <select onChange={props.handleActionTypeChange.bind(this)}>
                <option value="pageLoad">Load a page</option>
                <option value="input">Edit a field</option>
                <option value="click">Click on something</option>
                <option value="confirmElementExists">Check if an element exists</option>
            </select>
        </div>
    );
};

export default SelectActionType;
