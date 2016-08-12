import React from 'react';

const FlowResult = (props) => {
    FlowResult.propTypes = {
        flow: React.PropTypes.object.isRequired
    };
    return (
        <pre>{JSON.stringify(props.flow, null, 4)}</pre>
    );
};
export default FlowResult;
