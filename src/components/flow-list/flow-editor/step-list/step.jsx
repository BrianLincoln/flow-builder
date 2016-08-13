import React from 'react';
import StepEditor from './step-editor/step-editor';

class Step extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = {
            showEditor: false
        };
    }
    handleClick() {
        this.setState({ showEditor: !this.state.showEditor });
    }

    render() {
        return (
            <div className="step">
                <div className="step-type" onClick={this.handleClick}>
                    {this.props.step.actionType}
                </div>
                {
                    this.state.showEditor === true ?
                        <StepEditor step={this.props.step} stepActions={this.props.stepActions} />
                        : null
                }
            </div>
        );
    }
}

Step.propTypes = {
    step: React.PropTypes.object.isRequired,
    stepActions: React.PropTypes.object.isRequired
};
export default Step;
