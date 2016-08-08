import React from 'react';
import Flow from './flow';

const ListFlows = (props) => {
    ListFlows.propTypes = {
        changeMode: React.PropTypes.function,
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
            <button onClick={props.changeMode.bind(this, 'flow-creator')}>Add a flow</button>
            <ul>
                {flowNodes}
            </ul>
        </div>
    );
};

export default ListFlows;
