import React from 'react';

const Flow = (props) => {
    Flow.propTypes = {
        flow: React.PropTypes.object
    };
    return (
        <div>
            {props.flow.name}
        </div>
    );
};

export default Flow;
