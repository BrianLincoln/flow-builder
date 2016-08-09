import React from 'react';
import Flow from './flow';

const ListFlows = (props) => {
    console.log('~~list flows');
    console.log(props);
    console.log(typeof(props.createNewFlow));
    ListFlows.propTypes = {
        createNewFlow: React.PropTypes.function,
        flows: React.PropTypes.array
    };
    const flowNodes = props.flows.map((flow) => {
        return (
            <Flow flow={flow} key={flow.id} />
        );
    });
    return (
        <div>
            <h2>Flows</h2>
            <button onClick={props.createNewFlow.bind(this, 'flow-creator')}>Add a flow</button>
            <ul>
                {flowNodes}
            </ul>
        </div>
    );
};

export default ListFlows;
