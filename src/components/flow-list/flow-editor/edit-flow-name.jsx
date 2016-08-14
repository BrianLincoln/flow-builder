import React from 'react';

const EditFlowName = (props) => {
    EditFlowName.propTypes = {
        cancelNameEdit: React.PropTypes.func.isRequired,
        handleNameFieldChange: React.PropTypes.func.isRequired,
        name: React.PropTypes.string.isRequired,
        saveNameEdit: React.PropTypes.func.isRequired
    };
    return (
        <header>
            <input className="flow-editor-name" id="name" onChange={props.handleNameFieldChange.bind(this)} type="text" value={props.name} />
            <nav>
                <button onClick={props.cancelNameEdit.bind(this)}>cancel</button>
                <button onClick={props.saveNameEdit.bind(this)}>save</button>
            </nav>
        </header>
    );
};
export default EditFlowName;
