import React from 'react';
import FlowEditor from './flow-editor/flow-editor';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions';

class FlowManager extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }
    componentDidMount() {
        this.props.actions.fetchFlow(this.props.flowId);
    }
    render() {
        if (this.props.flow.id !== undefined) {
            return (
                <FlowEditor actions={this.props.actions} flow={this.props.flow} />
            );
        } else {
            return (
                <h1>Hold up</h1>
            );
        }

    }
}

FlowManager.propTypes = {
    actions: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    flow: React.PropTypes.object.isRequired,
    flowId: React.PropTypes.string.isRequired,
    uiState: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        uiState: state.uiState,
        flow: state.flow
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(action, dispatch),
        dispatch
    };
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FlowManager);
