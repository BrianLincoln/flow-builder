import React from 'react';
import StepEditor from './step-editor/step-editor';

class Step extends React.Component {
    constructor(props) {
        super(props);

        this.showStepEditorClick = this.showStepEditorClick.bind(this);
        this.hideStepEditor = this.hideStepEditor.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleMoveDownclick = this.handleMoveDownclick.bind(this);
        this.handleMoveUpclick = this.handleMoveUpclick.bind(this);

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
                <a className="list-group-item" data-tar={'step' + this.props.step.id} onClick={this.showStepEditorClick}>
                    <span>{this.props.stepNumber}.) {this.props.step.stepType}</span>
                    <span className="pull-right fa fa-trash-o" onClick={this.handleDeleteClick} />
                    <span className="pull-right fa fa-arrow-down" onClick={this.handleMoveDownclick} />
                    <span className="pull-right fa fa-arrow-up" onClick={this.handleMoveUpclick} />
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
