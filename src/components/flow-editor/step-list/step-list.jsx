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
            <div className="list-group">{stepNodes}</div>
        );
    }
    return (
        <div>Nothing yet</div>
    );
};

export default StepList;
