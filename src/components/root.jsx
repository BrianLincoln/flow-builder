import React from 'react';
import ListFlows from './list-flows';
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
        const { flows } = this.props;
        return <ListFlows createNewFlow={this.createNewFlow} editFlow={this.editFlow} flows={flows} showFlowEditor={this.showFlowEditor} />;
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
