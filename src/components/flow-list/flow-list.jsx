import React from 'react';
import Flow from './flow';

const FlowList = (props) => {
    FlowList.propTypes = {
        flowActions: React.PropTypes.object.isRequired,
        flows: React.PropTypes.array.isRequired,
        stepActions: React.PropTypes.object.isRequired
    };
    const flowNodes = props.flows.map((flow) => {
        return (
            <Flow flow={flow} flowActions={props.flowActions} key={flow.id} stepActions={props.stepActions}  />
        );
    });
    return (
        <ul>
            {flowNodes}
        </ul>
    );
};

export default FlowList;
