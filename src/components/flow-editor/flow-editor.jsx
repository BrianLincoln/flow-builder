import React from 'react';


class FlowCreator extends React.Component {

    constructor(props) {
        super(props);
        this.handleNameFieldChange = this.handleNameFieldChange.bind(this);
    }

    handleNameFieldChange (event) {
        this.setState({ 'name': event.target.value });
    }

    render() {
        return (
            <div>
                <button onClick={this.props.showFlowList.bind(this)}>Back</button>
                {this.props.flowId}
                <input onChange={this.handleNameFieldChange} type="text" />
            </div>
        );
    }
}

FlowCreator.propTypes = {
    editFlow: React.PropTypes.func.isRequired,
    flowId: React.PropTypes.string.isRequired,
    showFlowList: React.PropTypes.func.isRequired
};

export default FlowCreator;
