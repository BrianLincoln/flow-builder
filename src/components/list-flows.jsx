import React from 'react';
import Flow from './flow';

const ListFlows = (props) => {
    ListFlows.propTypes = {
        createNewFlow: React.PropTypes.func.isRequired,
        editFlow: React.PropTypes.func.isRequired,
        flows: React.PropTypes.array.isRequired
    };
    const flowNodes = props.flows.map((flow) => {
        return (
            <Flow editFlow={props.editFlow} flow={flow} key={flow.id}  />
        );
    });
    return (
        <div>
            <h2>Flows</h2>
            <button onClick={props.createNewFlow.bind(this, 'flow-editor')}>Add a flow</button>
            <ul>
                {flowNodes}
            </ul>
        </div>
    );
};

export default ListFlows;
