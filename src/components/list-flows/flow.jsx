import React from 'react';

const Flow = (props) => {
    Flow.propTypes = {
        flow: React.PropTypes.object
    };
    return (
        <div>
            {props.flow.flowName}
        </div>
    );
};

export default Flow;
