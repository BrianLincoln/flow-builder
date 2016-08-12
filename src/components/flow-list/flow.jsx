import React from 'react';
import FlowEditor from './flow-editor/flow-editor';

class Flow extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = {
            showEditor: false
        };
    }
    handleClick() {
        this.setState({ showEditor: !this.state.showEditor });
    }
    render() {
        return (
            <div className="flow">
                <div className="flow-name" onClick={this.handleClick}>
                    {this.props.flow.name}
                </div>
                {
                    this.state.showEditor === true ?
                        <FlowEditor flow={this.props.flow} flowActions={this.props.flowActions} stepActions={this.props.stepActions} />
                        : null
                }
            </div>
        );
    }
}
Flow.propTypes = {
    flow: React.PropTypes.object.isRequired,
    flowActions: React.PropTypes.object.isRequired,
    stepActions: React.PropTypes.object.isRequired
};
export default Flow;
