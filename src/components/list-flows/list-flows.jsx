import React from 'react';
import Flow from './flow';

const ListFlows = (props) => {
    ListFlows.propTypes = {
        createNewFlow: React.PropTypes.func.isRequired,
        flows: React.PropTypes.array.isRequired,
        showFlowEditor: React.PropTypes.func.isRequired
    };
    const flowNodes = props.flows.map((flow) => {
        return (
            <Flow flow={flow} key={flow.id} showFlowEditor={props.showFlowEditor} />
        );
    });
    return (
        <div>
            <h2>Flows</h2>
            <button onClick={props.createNewFlow.bind(this, 'flow-editor')}>Add a flow</button>
            <a onClick={props.showFlowEditor.bind(this, '878')}> barf </a>
            <ul>
                {flowNodes}
            </ul>
        </div>
    );
};

export default ListFlows;
