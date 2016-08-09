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

    }
    createNewFlow (mode) {
        this.props.actions.addFlow();
    }
    render() {
        const { flows, actions, currentView } = this.props;
        switch (currentView) {
            case 'flow-editor':
                return <FlowEditor />;
            case 'flow-list':
            default:
                return <ListFlows actions={actions} createNewFlow={this.createNewFlow} flows={flows}  />;
        }
    }
}

FlowManager.propTypes = {
    actions: React.PropTypes.object.isRequired,
    currentView: React.PropTypes.string.isRequired,
    flows: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        currentView: state.currentView,
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
