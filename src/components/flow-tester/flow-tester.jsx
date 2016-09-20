import React from 'react';
import FlowResult from './flow-result';
import FlowPlayback from './flow-playback';

const FlowTester = (props) => {
    FlowTester.propTypes = {
        actions: React.PropTypes.object.isRequired,
        flow: React.PropTypes.object.isRequired,
        test: React.PropTypes.object.isRequired
    };

    let failedStepNumber = undefined;

    if (props.test.failedStep !== undefined) {
        console.log('~~~~');
        console.log(props);
        console.log(findStepNumber(props.flow.steps, props.test.failedStep));

        failedStepNumber = findStepNumber(props.flow.steps, props.test.failedStep);
    }

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

    return (
        <div className="col-xs-12 col-md-6">
            <FlowResult {...props} failedStepNumber={failedStepNumber} />
            <FlowPlayback {...props} />
        </div>
    );

};

export default FlowTester;
