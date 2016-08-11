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
        this.editFlow = this.editFlow.bind(this);
    }
    createNewFlow () {
        this.props.actions.addFlow();
    }
    editFlow(id, name, steps) {
        console.log("----editflow");
        console.log(id);
        this.props.actions.editFlow(id, name, steps);
    }
    showFlowEditor (flow) {
        this.props.actions.setCurrentFlow(flow);
        this.props.actions.changeView('flow-editor');
    }
    showFlowList () {
        this.props.actions.setCurrentFlow(undefined);
        this.props.actions.changeView('flow-list');
    }
    render() {
        console.log("------------render root");
        console.log(this)
        const { flows, uiState } = this.props;
        switch (uiState.currentView) {
            case 'flow-editor':
                return <FlowEditor editFlow={this.editFlow} flow={uiState.currentFlow} showFlowList={this.showFlowList} />;
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
