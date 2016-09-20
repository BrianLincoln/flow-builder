import React from 'react';

const FlowResult = (props) => {
    FlowResult.propTypes = {
        actions: React.PropTypes.object.isRequired,
        failedStepNumber: React.PropTypes.number,
        flow: React.PropTypes.object.isRequired,
        test: React.PropTypes.object.isRequired
    };

    const failedText = props.failedStepNumber !== undefined ? 'Failed on step #' + props.failedStepNumber : 'Failed';

    switch (props.test.status) {
        case 'notStarted':
            return null;
        case 'running':
            return <div className="flow-result loader">Loading...</div>;
        case 'failed':
            return (
                <div className="col-xs-12 flow-result bg-danger">
                    <h3>{failedText} <span className="fa fa-exclamation-triangle pull-right" /></h3>
                    <p>{props.test.failureMessage}</p>
                </div>
            );
        case 'success':
            return (
                <div className="col-xs-12 flow-result bg-success">
                    <h3>Lookin Good <span className="fa fa-thumbs-up pull-right" /></h3>
                    <p>Test passed with no issues to report.</p>
                </div>
            );
        default:
            return (
                <div className="col-xs-12 flow-result bg-danger">
                    <h3>Huh... that is weird.</h3>
                    <p>Something is not right, try refreshing your browser</p>
                    {props.test.status}
                </div>
            );
    }
};

export default FlowResult;
