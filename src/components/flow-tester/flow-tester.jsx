import React from 'react';
import FlowResult from './flow-result';
import FlowPlayback from './flow-playback';

const FlowTester = (props) => {
    FlowTester.propTypes = {
        actions: React.PropTypes.object.isRequired,
        flow: React.PropTypes.object.isRequired,
        test: React.PropTypes.object.isRequired
    };

    let failedStepNumber = props.test.failedStep !== undefined ? findStepNumber(props.flow.steps, props.test.failedStep) : undefined;
    const slideCount = failedStepNumber !== undefined ? failedStepNumber : props.flow.steps.length;

    function findStepNumber (steps, stepId)  {
        let result = undefined;

        for (let i = 0; i < steps.length; i++) {
            const step = steps[i];

            if (step._id === stepId) {
                result = i + 1;
            }
        }

        return result;
    }

    const flowPlayback = props.test.status === 'failed' || props.test.status === 'success'
        ? <FlowPlayback {...props} failedStepNumber={failedStepNumber} slideCount={slideCount} />
        : null;

    return (
        <div className="col-xs-12 col-md-6">
            <FlowResult {...props} failedStepNumber={failedStepNumber} />
            {flowPlayback}
        </div>
    );

};

export default FlowTester;
