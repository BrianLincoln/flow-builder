import React from 'react';

const Flow = (props) => {
    Flow.propTypes = {
        flow: React.PropTypes.object.isRequired,
        showFlowEditor: React.PropTypes.func.isRequired
    };
    return (
        <div onClick={props.showFlowEditor.bind(this, props.flow)} >
            {props.flow.name}
        </div>
    );
};

export default Flow;
