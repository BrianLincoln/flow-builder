import React from 'react';

const SelectStepType = () => {
    return (
        <div>
            <h3>What should happen?</h3>
            <ul>
                <li>
                    <label>Load a page</label>
                    <input name="step-type" type="radio" value="pageLoad" />
                </li>

                <li>
                    <label>Edit a field</label>
                    <input name="step-type" type="radio" value="input" />
                </li>

                <li>
                    <label>Click on something</label>
                    <input name="step-type" type="radio" value="click" />
                </li>

                <li>
                    <label>Check if an element exists</label>
                    <input name="step-type" type="radio" value="confirmElementExists" />
                </li>
            </ul>
        </div>
    );
};

export default SelectStepType;
