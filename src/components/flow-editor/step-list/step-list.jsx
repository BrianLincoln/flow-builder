import React from 'react';
import Step from './step';

const StepList = (props) => {
    StepList.propTypes = {
        actions: React.PropTypes.object.isRequired,
        flowId: React.PropTypes.string.isRequired,
        steps: React.PropTypes.array
    };

    if (props.steps !== undefined && props.steps.length > 0) {
        const stepNodes = props.steps.map((step, index) => {
            return (
                <Step actions={props.actions} flowId={props.flowId} key={step._id} step={step} stepNumber={index + 1} />
            );
        });
        return (
            <div className="step-list">{stepNodes}</div>
        );
    }
    return (
        <h4>Add a step to get started</h4>
    );
};

export default StepList;
