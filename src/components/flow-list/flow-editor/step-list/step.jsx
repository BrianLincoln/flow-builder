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
            <li className="step">
                <button className="step-type" onClick={this.handleClick}><span className="step-number">{this.props.stepNumber + 1}.) </span> {this.props.step.actionType}</button>
                {
                    this.state.showEditor === true ?
                        <StepEditor step={this.props.step} stepActions={this.props.stepActions} />
                        : null
                }
            </li>
        );
    }
}

Step.propTypes = {
    step: React.PropTypes.object.isRequired,
    stepActions: React.PropTypes.object.isRequired,
    stepNumber: React.PropTypes.number.isRequired
};
export default Step;
