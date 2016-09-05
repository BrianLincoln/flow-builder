import React from 'react';

class FlowTester extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
        };
    }

    render() {
        if (this.props.test !== undefined && this.props.test.isTesting) {
            return (
                <div className="flow-tester col-xs-12 col-md-6">
                    <div className="loader">Loading...</div>
                </div>
            );
        } else {
            return (
                <div className="flow-tester col-xs-12 col-md-6">
                    <h1>{this.props.test.result}</h1>
                </div>
            );
        }

    }
}

FlowTester.propTypes = {
    actions: React.PropTypes.object.isRequired,
    flow: React.PropTypes.object.isRequired,
    test: React.PropTypes.object
};

export default FlowTester;
