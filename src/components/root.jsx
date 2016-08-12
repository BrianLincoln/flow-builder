import React from 'react';
import FlowList from './flow-list/flow-list';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class FlowManager extends React.Component {

    constructor(props) {
        super(props);

        this.flowActions = {
            addFlow: this.props.actions.addFlow,
            deleteFlow: this.props.actions.deleteFlow,
            editFlow: this.props.actions.editFlow
        };

        this.stepActions = {
            addStep: this.props.actions.addStep,
            deleteStep: this.props.actions.deleteStep,
            editStep: this.props.actions.editStep
        };
    }

    render() {
        const { flows } = this.props;
        return <FlowList flowActions={this.flowActions} flows={flows} stepActions={this.stepActions} />;
    }
}

FlowManager.propTypes = {
    actions: React.PropTypes.object.isRequired,
    flows: React.PropTypes.array.isRequired,
    uiState: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        uiState: state.uiState,
        flows: state.flows
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FlowManager);
