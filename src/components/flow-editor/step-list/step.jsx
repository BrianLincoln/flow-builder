import React from 'react';
import StepEditor from './step-editor/step-editor';

class Step extends React.Component {
    constructor(props) {
        super(props);

        this.generateDisplayName = this.generateDisplayName.bind(this);
        this.showStepEditorClick = this.showStepEditorClick.bind(this);
        this.hideStepEditor = this.hideStepEditor.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleMoveDownclick = this.handleMoveDownclick.bind(this);
        this.handleMoveUpclick = this.handleMoveUpclick.bind(this);

        this.state = {
            displayName: this.generateDisplayName(this.props.step),
            showEditor: false
        };
    }
    generateDisplayName(step) {
        let result = null;

        switch (step.stepType) {
            case 'pageLoad':
                result = (
                    <div className="flow-editor-step-name">
                        <samp>{this.props.stepNumber}. </samp>
                        <strong>Load: </strong>
                        <samp className="flow-editor-step-value">{step.url}</samp>
                    </div>
                );
                break;
            case 'click':
                result = (
                    <div className="flow-editor-step-name">
                        <samp>{this.props.stepNumber}. </samp>
                        <strong>Click: </strong>
                        <samp className="flow-editor-step-value">{step.selector}</samp>
                    </div>
                );
                break;
            case 'hover':
                result = (
                    <div className="flow-editor-step-name">
                        <samp>{this.props.stepNumber}. </samp>
                        <strong>Hover: </strong>
                        <samp className="flow-editor-step-value">{step.selector}</samp>
                    </div>
                );
                break;
            case 'confirmElementExists':
                result = (
                    <div className="flow-editor-step-name">
                        <samp>{this.props.stepNumber}. </samp>
                        <strong>Confirm element exists: </strong>
                        <samp className="flow-editor-step-value">{step.selector}</samp>
                    </div>
                );
                break;
            case 'input':
                result = (
                    <div className="flow-editor-step-name">
                        <samp>{this.props.stepNumber}. </samp>
                        <strong>Edit input: </strong>
                        <samp className="flow-editor-step-value">{step.selector}</samp>
                    </div>
                );
                break;
        }

        return result;
    }
    showStepEditorClick() {
        this.setState({ showEditor: !this.state.showEditor });
    }
    hideStepEditor() {
        this.setState({ showEditor: false });
    }
    handleDeleteClick(e) {
        e.stopPropagation();
        this.props.actions.removeStep(this.props.flowId, this.props.step._id);
    }
    handleMoveDownclick(e) {
        e.stopPropagation();
        this.props.actions.moveStep(this.props.flowId, this.props.step._id, 'down');
    }
    handleMoveUpclick(e) {
        e.stopPropagation();
        this.props.actions.moveStep(this.props.flowId, this.props.step._id, 'up');
    }
    render() {
        if (this.state.showEditor === true) {
            return <StepEditor {...this.props} hideStepEditor={this.hideStepEditor}  />;
        } else {
            return (
                <a className="list-group-item flow-editor-step" data-tar={'step' + this.props.step._id} onClick={this.showStepEditorClick}>
                    <div className="flow-editor-step-name-wrapper">{this.state.displayName}</div>
                    <div className="flow-editor-step-button-wrapper">
                        <div className="flow-editor-step-button fa fa-trash-o" onClick={this.handleDeleteClick} />
                        <div className="flow-editor-step-button fa fa-arrow-down" onClick={this.handleMoveDownclick} />
                        <div className="flow-editor-step-button fa fa-arrow-up" onClick={this.handleMoveUpclick} />
                    </div>
                </a>
            );
        }
    }
}

Step.propTypes = {
    actions: React.PropTypes.object.isRequired,
    flowId: React.PropTypes.string.isRequired,
    step: React.PropTypes.object.isRequired,
    stepNumber: React.PropTypes.number.isRequired
};
export default Step;
