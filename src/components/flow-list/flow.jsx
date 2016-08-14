import React from 'react';
import FlowEditor from './flow-editor/flow-editor';

class Flow extends React.Component {
    constructor(props) {
        super(props);

        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.state = {
            isEditable: false
        };
    }
    toggleEditMode() {
        this.setState({ isEditable: !this.state.isEditable });
    }
    render() {
        return (
            <li>
                {
                    this.state.isEditable === true ?
                        <FlowEditor flow={this.props.flow} flowActions={this.props.flowActions} stepActions={this.props.stepActions} toggleEditMode={this.toggleEditMode} />
                        : <button onClick={this.toggleEditMode}>{this.props.flow.name}</button>
                }
            </li>
        );
    }
}
Flow.propTypes = {
    flow: React.PropTypes.object.isRequired,
    flowActions: React.PropTypes.object.isRequired,
    stepActions: React.PropTypes.object.isRequired
};
export default Flow;
