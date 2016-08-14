import React from 'react';
import StepEditor from './step-editor/step-editor';

class Step extends React.Component {
    constructor(props) {
        super(props);

        this.showStepEditorClick = this.showStepEditorClick.bind(this);
        this.hideStepEditor = this.hideStepEditor.bind(this);
        this.state = {
            showEditor: false
        };
    }
    showStepEditorClick() {
        this.setState({ showEditor: !this.state.showEditor });
    }
    hideStepEditor() {
        this.setState({ showEditor: false });
    }
    render() {
        return (
            <li className="step">
                {
                    this.state.showEditor === true ?
                        <StepEditor hideStepEditor={this.hideStepEditor} step={this.props.step} stepActions={this.props.stepActions} />
                        : <button className="step-type" onClick={this.showStepEditorClick}><span className="step-number">{this.props.stepNumber + 1}.) </span> {this.props.step.actionType}</button>
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
