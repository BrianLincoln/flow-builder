import React from 'react';
import Step from './step';

const StepList = (props) => {
    StepList.propTypes = {
        flowActions: React.PropTypes.object.isRequired,
        flowId: React.PropTypes.string.isRequired,
        stepActions: React.PropTypes.object.isRequired,
        steps: React.PropTypes.array.isRequired
    };
    const stepNodes = props.steps.map((step, index) => {
        return (
            <Step key={step.id} step={step} stepActions={props.stepActions} stepNumber={index} />
        );
    });
    return (
        <div>
            <button onClick={props.stepActions.addStep.bind(this, props.flowId)}>+ new step</button>
            <ul className="step-list">
                {stepNodes}
            </ul>
        </div>
    );
};

export default StepList;
