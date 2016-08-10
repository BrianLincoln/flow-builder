import React from 'react';
import ListFlows from './list-flows/list-flows';
import FlowEditor from './flow-editor/flow-editor';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';


class FlowManager extends React.Component {

    constructor(props) {
        super(props);

        this.createNewFlow = this.createNewFlow.bind(this);
        this.showFlowEditor = this.showFlowEditor.bind(this);

    }
    createNewFlow () {
        this.props.actions.addFlow();
    }
    showFlowEditor (id) {
        this.props.actions.setCurrentFlow(id);
        this.props.actions.changeView('flow-editor');
    }
    render() {
        const { flows, uiState } = this.props;
        switch (uiState.currentView) {
            case 'flow-editor':
                return <FlowEditor flowId={uiState.currentFlowId} />;
            case 'flow-list':
            default:
                return <ListFlows createNewFlow={this.createNewFlow} flows={flows} showFlowEditor={this.showFlowEditor} />;
        }
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
