import React from 'react';

const FlowCreator = (props) => {
    FlowCreator.propTypes = {
        flowId: React.PropTypes.string.isRequired
    };
    return (
        <div>
            new thing
            {props.flowId}
        </div>
    );
};

export default FlowCreator;
