import React from 'react';
import FlowResult from './flow-result';
import StepList from './step-list/step-list';

class FlowEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameFieldChange = this.handleNameFieldChange.bind(this);

        this.state = {
            name: props.flow.name
        };
    }
    handleNameFieldChange (event) {
        this.setState({ 'name': event.target.value });
    }
    render() {
        return (
            <div>
                <label htmlFor="name">
                    <div>edit name</div>
                    <input id="name" onChange={this.handleNameFieldChange} type="text" value={this.state.name} />
                </label>
                <button onClick={this.props.flowActions.editFlow.bind(this, this.props.flow.id, this.state.name, this.props.flow.steps)}>save</button>

                <StepList flowActions={this.props.flowActions} stepActions={this.props.stepActions} steps={this.props.flow.steps} />

                <FlowResult flow={this.props.flow} />
            </div>
        );
    }
}

FlowEditor.propTypes = {
    flow: React.PropTypes.object.isRequired,
    flowActions: React.PropTypes.object.isRequired,
    stepActions: React.PropTypes.object.isRequired
};

export default FlowEditor;
