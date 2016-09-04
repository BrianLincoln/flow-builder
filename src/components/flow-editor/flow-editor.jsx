import React from 'react';
import StepList from './step-list/step-list';
import FlowResult from './flow-result';
import FlowName from './flow-name';

class FlowEditor extends React.Component {
    constructor(props) {
        super(props);
        this.saveNameChangeForm = this.saveNameChangeForm.bind(this);
        this.showNameChangeForm = this.showNameChangeForm.bind(this);
        this.cancelNameChangeForm = this.cancelNameChangeForm.bind(this);
        this.handleNameFieldChange = this.handleNameFieldChange.bind(this);

        this.state = {
            showNameEditField: false,
            name: props.flow.name,
            steps: props.flow.steps
        };
    }
    saveNameChangeForm () {
        this.props.actions.editFlowName(this.props.flow.id, this.state.name);
        this.setState({ showNameEditField: false });
    }
    showNameChangeForm () {
        this.setState({ showNameEditField: true });
    }
    cancelNameChangeForm () {
        this.setState({
            showNameEditField: false,
            name: this.props.flow.name
        });
    }
    handleNameFieldChange (e) {
        this.setState({ name: e.target.value });
    }
    render() {
        return (
            <div className="flow-editor">
                <div className="page-header text-center clearfix">
                    <FlowName cancelNameChangeForm={this.cancelNameChangeForm} handleNameFieldChange={this.handleNameFieldChange} isEditable={this.state.showNameEditField} name={this.state.name} saveNameEdit={this.saveNameChangeForm} showNameChangeForm={this.showNameChangeForm} />

                    <div className="btn-group pull-right">
                        <button className="btn btn-primary" data-tar="run-test" onClick={this.props.actions.runTest.bind(this, this.props.flow)}>Run Test</button>
                        <a className="btn btn-default" href={'/flow/' + this.props.flow.id + '/delete'}><span className="fa fa-trash-o" /></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <StepList actions={this.props.actions} flowId={this.props.flow.id} steps={this.props.flow.steps} />
                        <button className="btn btn-primary" onClick={this.props.actions.addStep.bind(this, this.props.flow.id)}><span className="fa fa-plus" /> new step</button>
                    </div>
                </div>
            </div>
        );
    }
}

FlowEditor.propTypes = {
    actions: React.PropTypes.object.isRequired,
    flow: React.PropTypes.object.isRequired
};

export default FlowEditor;
