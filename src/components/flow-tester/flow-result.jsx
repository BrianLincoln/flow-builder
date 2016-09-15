import React from 'react';

const FlowResult = (props) => {
    FlowResult.propTypes = {
        actions: React.PropTypes.object.isRequired,
        flow: React.PropTypes.object.isRequired,
        test: React.PropTypes.object.isRequired
    };

    switch (props.test.status) {
        case 'notStarted':
            return null;
        case 'running':
            return <div className="flow-tester loader">Loading...</div>;
        case 'failed':
            return (
                <div className="col-xs-12 flow-tester bg-danger">
                    <h1 className="text-center"><span className="fa fa-exclamation-triangle" /></h1>
                    <h3>Failed on step #{props.test.failedStep}</h3>
                    <p>{props.test.failureMessage}</p>
                </div>
            );
        case 'success':
            return (
                <div className="col-xs-12 flow-tester bg-success">
                    <h1 className="text-center"><span className="fa fa-thumbs-up" /></h1>
                    <h3>Lookin good.</h3>
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
