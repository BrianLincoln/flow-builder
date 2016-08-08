import React from 'react';
import Flow from './flow';

const ListFlows = (props) => {
    ListFlows.propTypes = {
        flows: React.PropTypes.object
    };
    const flowNodes = props.flows.map((flow) => {        
        return (
            <Flow flow={flow} key={flow.id} />
        );
    });

    return (
        <div>
            <h2>Flows</h2>
            <button onClick={handleNewFlowButtonClick}>Add a flow</button>
            <ul>
                {flowNodes}
            </ul>
        </div>
    );
};

const handleNewFlowButtonClick = (event) => {
    console.log(event);
};

export default ListFlows;
