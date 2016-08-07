import React from 'react';

const FlowResult = (flow) => {
    return (
        <pre>{JSON.stringify(flow, null, 4)}</pre>
    );
};

export default FlowResult;
