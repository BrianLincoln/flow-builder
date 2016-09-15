import React from 'react';
import FlowResult from './flow-result';
import FlowPlayback from './flow-playback';

const FlowTester = (props) => {
    FlowTester.propTypes = {
        actions: React.PropTypes.object.isRequired,
        flow: React.PropTypes.object.isRequired,
        test: React.PropTypes.object.isRequired
    };

    return (
        <div className="col-xs-12 col-md-6">
            <FlowResult {...props} />
            <FlowPlayback {...props} />
        </div>
    );

};

export default FlowTester;
