import React from 'react';
import Step from './step';

const StepList = (props) => {
    StepList.propTypes = {
        flowActions: React.PropTypes.object.isRequired,
        flowId: React.PropTypes.string.isRequired,
        stepActions: React.PropTypes.object.isRequired,
        steps: React.PropTypes.array.isRequired
    };
    const stepNodes = props.steps.map((step) => {
        return (
            <Step key={step.id} step={step} stepActions={props.stepActions} />
        );
    });
    return (
        <div>
            <h2>Steps</h2>
            <button onClick={props.stepActions.addStep.bind(this, props.flowId)}>add step</button>
            <ul className="step-list">
                {stepNodes}
            </ul>
        </div>
    );
};

export default StepList;
