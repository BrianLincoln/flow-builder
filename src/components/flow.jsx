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
            <div>
                <div onClick={this.handleClick}>
                    {this.props.flow.name}
                </div>
                {
                    this.state.showEditor === true ?
                        <FlowEditor editFlow={this.props.editFlow} flow={this.props.flow} />
                        : null
                }
            </div>
        );
    }
}
Flow.propTypes = {
    editFlow: React.PropTypes.func.isRequired,
    flow: React.PropTypes.object.isRequired
};
export default Flow;
