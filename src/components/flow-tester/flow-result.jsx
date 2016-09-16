import React from 'react';

const FlowResult = (props) => {
    FlowResult.propTypes = {
        actions: React.PropTypes.object.isRequired,
        flow: React.PropTypes.object.isRequired,
        test: React.PropTypes.object.isRequired
    };

    const failedText = props.test.failedStep !== undefined ? 'Failed on step #' + props.test.failedStep : 'Failed';

    switch (props.test.status) {
        case 'notStarted':
            return null;
        case 'running':
            return <div className="flow-tester loader">Loading...</div>;
        case 'failed':
            return (
                <div className="col-xs-12 flow-tester bg-danger">
                    <h1>{failedText} <span className="fa fa-exclamation-triangle pull-right" /></h1>
                    <p>{props.test.failureMessage}</p>
                </div>
            );
        case 'success':
            return (
                <div className="col-xs-12 flow-tester bg-success">
                    <h1>Lookin Good <span className="fa fa-thumbs-up pull-right" /></h1>
                    <p>Test passed with no issues to report.</p>
                </div>
            );
        default:
            return (
                <div className="col-xs-12 flow-tester bg-danger">
                    <h4>Huh... that is weird.</h4>
                    <p>Something is not right, try refreshing your browser</p>
                    {props.test.status}
                </div>
            );
    }
};

export default FlowResult;
