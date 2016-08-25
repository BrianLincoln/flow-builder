import React from 'react';

const FlowResult = (props) => {
    FlowResult.propTypes = {
        flow: React.PropTypes.object.isRequired
    };
    return (
        <pre className="col-md-6 flow-result">{JSON.stringify(props.flow, null, 4)}</pre>
    );
};
export default FlowResult;
