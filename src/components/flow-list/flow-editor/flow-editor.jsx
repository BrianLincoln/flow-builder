import React from 'react';
import StepList from './step-list/step-list';
import FlowResult from './flow-result';
import EditFlowName from './edit-flow-name';

class FlowEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameFieldChange = this.handleNameFieldChange.bind(this);
        this.cancelNameEdit = this.cancelNameEdit.bind(this);
        this.saveNameEdit = this.saveNameEdit.bind(this);
        this.showNameChangeForm = this.showNameChangeForm.bind(this);

        this.state = {
            isNameEditable: false,
            name: props.flow.name,
            steps: props.flow.steps
        };
    }
    handleNameFieldChange (event) {
        this.setState({ 'name': event.target.value });
    }
    cancelNameEdit () {
        this.setState({ 'name': this.props.flow.name, isNameEditable: false });
    }
    saveNameEdit () {
        this.props.flowActions.editFlowName(this.props.flow.id, this.state.name);
        this.setState({ isNameEditable: false });
    }
    showNameChangeForm () {
        this.setState({ isNameEditable: true });
    }
    flowName () {
        if (this.state.isNameEditable === true) {
            return <EditFlowName cancelNameEdit={this.cancelNameEdit} flowActions={this.props.flowActions} handleNameFieldChange={this.handleNameFieldChange} name={this.state.name} saveNameEdit={this.saveNameEdit} />;
        }
        return <h2 onClick={this.showNameChangeForm}>{this.props.flow.name}</h2>;
    }
    render() {
        return (
            <div className="flow-editor">
                {this.flowName()}
                <StepList flowActions={this.props.flowActions} flowId={this.props.flow.id} stepActions={this.props.stepActions} steps={this.props.flow.steps} />
                <FlowResult flow={this.props.flow} />
            </div>
        );
    }
}

FlowEditor.propTypes = {
    flow: React.PropTypes.object.isRequired,
    flowActions: React.PropTypes.object.isRequired,
    stepActions: React.PropTypes.object.isRequired,
    toggleEditMode: React.PropTypes.func.isRequired
};

export default FlowEditor;
