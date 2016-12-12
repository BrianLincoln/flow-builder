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
            <div className="flow-edit-name form-group">
                <input className="form-control" id="name" onChange={props.handleNameFieldChange} type="text" value={props.name} />
                <div className="button-group_left">
                    <button className="button button_bluewood button_sm" onClick={props.cancelNameChangeForm.bind(this)} title="cancel change"><span className="fa fa-times" /></button>
                    <button className="button button_valencia button_sm" onClick={props.saveNameEdit.bind(this)} title="save change"><span className="fa fa-check" /> save</button>
                </div>
            </div>
        );
    } else {
        return (
            <h1 className="flow-page-header" onClick={props.showNameChangeForm}>{props.name} <span className="flow-page-header-edit fa fa-pencil-square-o" /></h1>
        );
    }

};
export default FlowName;
