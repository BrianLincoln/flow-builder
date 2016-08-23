import React from 'react';
import SelectActionType from './select-action-type';
import PageLoadAction from './actions/page-load';
import ClickElementAction from './actions/click-element';
import EditInputAction from './actions/edit-input';

class StepEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleActionTypeChange = this.handleActionTypeChange.bind(this);
        this.handleInputValueChange = this.handleInputValueChange.bind(this);
        this.handleUrlFieldChange = this.handleUrlFieldChange.bind(this);
        this.handleSelectorTypeChange = this.handleSelectorTypeChange.bind(this);
        this.handleSelectorValueChange = this.handleSelectorValueChange.bind(this);
        this.saveStepEdits = this.saveStepEdits.bind(this);

        this.state = {
            step: props.step
        };
    }
    handleActionTypeChange (actionType) {
        const updatedStep = Object.assign({}, this.state.step, { actionType });
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
    handleSelectorTypeChange (selectorType) {
        const updatedStep = Object.assign({}, this.state.step, { selectorType });
        this.setState({
            step: updatedStep
        });
    }
    handleSelectorValueChange (selectorValue) {
        const updatedStep = Object.assign({}, this.state.step, { selectorValue });
        this.setState({
            step: updatedStep
        });
    }
    saveStepEdits () {
        this.props.actions.editStep(this.props.step.id, this.state.step);
        this.props.hideStepEditor();
    }
    render() {
        return (
            <div className="list-group-item bg-info">
                <div className="form-group">
                    <label htmlFor="action-type">Action to take</label>
                    <SelectActionType handleActionTypeChange={this.handleActionTypeChange} />
                </div>
                {(() => {
                    switch (this.state.step.actionType) {
                        case 'pageLoad':
                            return <PageLoadAction handleUrlFieldChange={this.handleUrlFieldChange} url={this.state.step.url} />;
                        case 'click':
                            return <ClickElementAction handleSelectorTypeChange={this.handleSelectorTypeChange} handleSelectorValueChange={this.handleSelectorValueChange} selectorType={this.state.step.selectorType} selectorValue={this.state.step.selectorValue} />;
                        case 'input':
                            return <EditInputAction handleInputValueChange={this.handleInputValueChange} handleSelectorTypeChange={this.handleSelectorTypeChange} handleSelectorValueChange={this.handleSelectorValueChange} inputValue={this.state.step.inputValue} selectorType={this.state.step.selectorType} selectorValue={this.state.step.selectorValue} />;
                    }
                })()}
                <button onClick={this.saveStepEdits}>save</button>
            </div>
        );
    }
}

StepEditor.propTypes = {
    actions: React.PropTypes.object.isRequired,
    hideStepEditor: React.PropTypes.func.isRequired,
    step: React.PropTypes.object.isRequired
};

export default StepEditor;
