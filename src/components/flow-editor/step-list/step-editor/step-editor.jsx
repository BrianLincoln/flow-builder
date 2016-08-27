import React from 'react';
import SelectActionType from './select-action-type';
import PageLoadAction from './actions/page-load';
import ConfirmElementExistsAction from './actions/confirm-element-exists';
import ClickElementAction from './actions/click-element';
import EditInputAction from './actions/edit-input';

class StepEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleStepTypeChange = this.handleStepTypeChange.bind(this);
        this.handleInputValueChange = this.handleInputValueChange.bind(this);
        this.handleUrlFieldChange = this.handleUrlFieldChange.bind(this);
        this.handleSelectorChange = this.handleSelectorChange.bind(this);
        this.saveStepEdits = this.saveStepEdits.bind(this);

        this.state = {
            step: props.step
        };
    }
    handleStepTypeChange (stepType) {
        const updatedStep = Object.assign({}, this.state.step, { stepType });
        this.setState({
            step: updatedStep
        });
    }
    handleInputValueChange (inputValue) {
        const updatedStep = Object.assign({}, this.state.step, { inputValue });
        this.setState({
            step: updatedStep
        });
    }
    handleUrlFieldChange (url) {
        const updatedStep = Object.assign({}, this.state.step, { url });
        this.setState({
            step: updatedStep
        });
    }
    handleSelectorChange (selector) {
        const updatedStep = Object.assign({}, this.state.step, { selector });
        this.setState({
            step: updatedStep
        });
    }
    saveStepEdits () {
        this.props.actions.editStep(this.props.flowId, this.props.step._id, this.state.step);
        this.props.hideStepEditor();
    }
    render() {
        return (
            <div>
                <span>{this.props.stepNumber + 1}.) {this.props.step.stepType}</span>
                <span className="pull-right fa fa-times" onClick={this.props.hideStepEditor} />
                <div className="form-group">
                    <SelectActionType handleStepTypeChange={this.handleStepTypeChange} stepType={this.props.step.stepType} />

                    {(() => {
                        switch (this.state.step.stepType) {
                            case 'pageLoad':
                                return <PageLoadAction handleUrlFieldChange={this.handleUrlFieldChange} url={this.state.step.url} />;
                            case 'confirmElementExists':
                                return <ConfirmElementExistsAction handleSelectorChange={this.handleSelectorChange} selector={this.state.step.selector} />;
                            case 'click':
                                return <ClickElementAction handleSelectorChange={this.handleSelectorChange} selector={this.state.step.selector} />;
                            case 'input':
                                return <EditInputAction handleInputValueChange={this.handleInputValueChange} handleSelectorChange={this.handleSelectorChange} inputValue={this.state.step.inputValue} selector={this.state.step.selector} />;
                        }
                    })()}
                    <button className="btn btn-primary" onClick={this.saveStepEdits}>save</button>
                </div>
            </div>
        );
    }
}

StepEditor.propTypes = {
    actions: React.PropTypes.object.isRequired,
    flowId: React.PropTypes.string.isRequired,
    hideStepEditor: React.PropTypes.func.isRequired,
    step: React.PropTypes.object.isRequired,
    stepNumber: React.PropTypes.number.isRequired
};

export default StepEditor;
