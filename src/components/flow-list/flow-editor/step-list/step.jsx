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
        if (this.state.showEditor === true) {
            return <StepEditor actions={this.props.actions} hideStepEditor={this.hideStepEditor} step={this.props.step} />;
        } else {
            return <a className="list-group-item" onClick={this.showStepEditorClick}><span>{this.props.stepNumber + 1}.) </span> {this.props.step.stepType}</a>;
        }
    }
}

Step.propTypes = {
    actions: React.PropTypes.object.isRequired,
    step: React.PropTypes.object.isRequired,
    stepNumber: React.PropTypes.number.isRequired
};
export default Step;
