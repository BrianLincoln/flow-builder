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
        <h2 className="flow-editor-empty"><span className="flow-editor-empty-arrow fa fa-hand-o-down" /> Add a step</h2>
    );
};

export default StepList;
