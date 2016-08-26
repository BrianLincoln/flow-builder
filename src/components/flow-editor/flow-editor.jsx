import React from 'react';
import StepList from './step-list/step-list';
import FlowResult from './flow-result';

class FlowEditor extends React.Component {
    constructor(props) {
        super(props);
        this.showNameChangeForm = this.showNameChangeForm.bind(this);

        this.state = {
            isNameEditable: false,
            name: props.flow.name,
            steps: props.flow.steps
        };
    }
    showNameChangeForm () {
        this.setState({ isNameEditable: true });
    }
    render() {
        return (
            <div className="row">
                <button className="btn btn-primary" onClick={this.props.actions.addStep.bind(this, this.props.flow.id)}>+ new step</button>
                <div className="col-md-6 list-group">
                    <StepList actions={this.props.actions} flowId={this.props.flow.id} steps={this.props.flow.steps} />
                </div>
                <FlowResult flow={this.props.flow} />
            </div>
        );
    }
}

FlowEditor.propTypes = {
    actions: React.PropTypes.object.isRequired,
    flow: React.PropTypes.object.isRequired
};

export default FlowEditor;
