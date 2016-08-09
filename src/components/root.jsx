import React from 'react';
import ListFlows from './list-flows/list-flows';
import FlowCreator from './flow-creator/flow-creator';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FlowActions from '../actions';


class FlowManager extends React.Component {

    constructor(props) {
        super(props);

        console.log('Manager');
        console.log(props);

        this.createNewFlow = this.createNewFlow.bind(this);
        this.state = {
            showFlowCreator: false,
            mode: 'list-flows'
        };
    }
    createNewFlow (mode) {
        console.log('createNewFlow');
        console.log(this.props);
        console.log(this.props.actions);
        console.log(this.props.actions.addFlow);
        this.props.actions.addFlow();
        //this.setState({ mode });
    }
    render() {
        const { flows, actions } = this.props;
        console.log('render');
        console.log(typeof(this.createNewFlow));
        console.log(this.props);
        console.log(flows);
        switch (this.state.mode) {
            case 'list-flows':
                return <ListFlows actions={actions} createNewFlow={this.createNewFlow} flows={flows}  />;
            case 'flow-creator':
                return <FlowCreator />;
        }
    }
}

FlowManager.propTypes = {
    actions: React.PropTypes.object.isRequired,
    flows: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        flows: state.flows
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(FlowActions, dispatch)
    };
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FlowManager);
