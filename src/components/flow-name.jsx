import React from 'react';

const FlowName = (props) => {
    FlowName.propTypes = {
        cancelNameChangeForm: React.PropTypes.func.isRequired,
        handleNameFieldChange: React.PropTypes.func.isRequired,
        isEditable: React.PropTypes.bool.isRequired,
        name: React.PropTypes.string.isRequired,
        saveNameEdit: React.PropTypes.func.isRequired,
        showNameChangeForm: React.PropTypes.func.isRequired
    };

    if (props.isEditable) {
        return (
            <div className="input-group input-group-lg">
                <input className="form-control" id="name" onChange={props.handleNameFieldChange} type="text" value={props.name} />
                <div className="input-group-btn">
                    <button className="btn btn-default" onClick={props.cancelNameChangeForm.bind(this)} title="cancel change"><span className="fa fa-times" /></button>
                    <button className="btn btn-primary" onClick={props.saveNameEdit.bind(this)} title="save change"><span className="fa fa-check" /> save</button>
                </div>
            </div>
        );
    } else {
        return (
            <h1 onClick={props.showNameChangeForm}>{props.name}</h1>
        );
    }

};
export default FlowName;
