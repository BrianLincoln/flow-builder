import React from 'react';
import ReactDOM from 'react-dom';
import StepCreator from './step-creator/step-creator';

class FlowManager extends React.Component {
    render() {
        return (
            <div>
                <h1>Manage flows</h1>
                <StepCreator />
            </div>
        );
    }
}

ReactDOM.render(
  React.createElement(FlowManager, null),document.getElementById('content')
);
