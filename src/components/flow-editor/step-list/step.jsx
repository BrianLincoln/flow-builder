import React from 'react';
import StepEditor from './step-editor/step-editor';

class Step extends React.Component {
    constructor(props) {
        super(props);

        this.generateStepListItem = this.generateStepListItem.bind(this);
        this.showStepEditorClick = this.showStepEditorClick.bind(this);
        this.hideStepEditor = this.hideStepEditor.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleMoveDownclick = this.handleMoveDownclick.bind(this);
        this.handleMoveUpclick = this.handleMoveUpclick.bind(this);

        this.state = {
            displayName: this.generateStepListItem(this.props.step),
            showEditor: false
        };
    }
    componentWillReceiveProps(nextProps) {
        this.state = {
            displayName: this.generateStepListItem(nextProps.step)
        };
    }
    generateStepListItem(step) {
        let result = null;

        switch (step.stepType) {
            case 'pageLoad':
                result = (
                    <div className="flow-editor-step-info">
                        <strong className="flow-editor-step-type">Load: </strong>
                        <samp className="flow-editor-step-value">{step.url}</samp>
                    </div>
                );
                break;
            case 'click':
                result = (
                    <div className="flow-editor-step-info">
                        <strong className="flow-editor-step-type">Click: </strong>
                        <samp className="flow-editor-step-value">{step.selector}</samp>
                    </div>
                );
                break;
            case 'hover':
                result = (
                    <div className="flow-editor-step-info">
                        <strong className="flow-editor-step-type">Hover: </strong>
                        <samp className="flow-editor-step-value">{step.selector}</samp>
                    </div>
                );
                break;
            case 'confirmElementExists':
                result = (
                    <div className="flow-editor-step-info">
                        <strong className="flow-editor-step-type">Confirm element exists: </strong>
                        <samp className="flow-editor-step-value">{step.selector}</samp>
                    </div>
                );
                break;
            case 'input':
                result = (
                    <div className="flow-editor-step-info">
                        <strong className="flow-editor-step-type">Edit input: </strong>
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
                <a className="flow-editor-step" data-tar={'step' + this.props.step._id} onClick={this.showStepEditorClick}>
                    <samp className="flow-editor-step-number">{this.props.stepNumber}</samp>
                    {this.state.displayName}
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
