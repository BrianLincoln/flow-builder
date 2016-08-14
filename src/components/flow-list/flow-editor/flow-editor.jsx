import React from 'react';
import StepList from './step-list/step-list';

class FlowEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameFieldChange = this.handleNameFieldChange.bind(this);

        this.state = {
            name: props.flow.name,
            steps: props.flow.steps
        };
    }
    handleNameFieldChange (event) {
        this.setState({ 'name': event.target.value });
    }
    render() {
        return (
            <div className="flow-editor">
                <header>
                    <input className="flow-editor-name" id="name" onChange={this.handleNameFieldChange} type="text" value={this.state.name} />
                    <nav>
                        <button onClick={this.props.toggleEditMode.bind(this)}>cancel</button>
                        <button onClick={this.props.flowActions.editFlow.bind(this, this.props.flow.id, this.state.name, this.state.steps)}>save</button>
                    </nav>
                </header>
                <StepList flowActions={this.props.flowActions} flowId={this.props.flow.id} stepActions={this.props.stepActions} steps={this.props.flow.steps} />
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
