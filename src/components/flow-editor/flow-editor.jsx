import React from 'react';
import StepList from './step-list/step-list';

class FlowEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="flow-editor col-xs-12 col-md-6">
                <StepList actions={this.props.actions} flowId={this.props.flow.id} steps={this.props.flow.steps} />
                <button className="btn btn-primary" onClick={this.props.actions.addStep.bind(this, this.props.flow.id)}><span className="fa fa-plus" /> new step</button>
            </div>
        );
    }
}

FlowEditor.propTypes = {
    actions: React.PropTypes.object.isRequired,
    flow: React.PropTypes.object.isRequired
};

export default FlowEditor;
