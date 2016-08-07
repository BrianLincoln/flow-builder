import React from 'react';
import ReactDOM from 'react-dom';
import ListFlows from './list-flows/list-flows';
import FlowCreator from './flow-creator/step-creator';

class FlowManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFlowCreator: false,
            mode: 'list-flows'
        };
    }
    render() {
        return (
            this.state.showFlowCreator === true ?
                <FlowCreator /> :
                <ListFlows />
        );
    }
}

ReactDOM.render(
  React.createElement(FlowManager, null),document.getElementById('content')
);
