import React from 'react';

const Step = (props) => {
    Step.propTypes = {
        step: React.PropTypes.object.isRequired,
        stepActions: React.PropTypes.object.isRequired
    };
    return (
        <div>
            {props.step.actionType}
        </div>
    );
};

export default Step;
