import React from 'react';

const FlowResult = (props) => {
    FlowResult.propTypes = {
        name: React.PropTypes.string.isRequired
    };
    return (
        <pre>{JSON.stringify(props.name, null, 4)}</pre>
    );
};

export default FlowResult;
