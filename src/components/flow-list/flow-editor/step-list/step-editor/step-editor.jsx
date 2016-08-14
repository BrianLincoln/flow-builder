import React from 'react';
import SelectActionType from './select-action-type';
import PageLoadAction from './actions/page-load';

class StepEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleActionTypeChange = this.handleActionTypeChange.bind(this);
        this.handleUrlFieldChange = this.handleUrlFieldChange.bind(this);
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
    handleUrlFieldChange (url) {
        const updatedStep = Object.assign({}, this.state.step, { url });
        console.log('updatedStep');
        console.log(updatedStep);
        this.setState({
            step: updatedStep
        });
    }
    saveStepEdits () {
        console.log('saveStepEdits');
        console.log(this.state.step);
        this.props.stepActions.editStep(this.props.step.id, this.state.step);
        this.props.hideStepEditor();
    }
    render() {
        return (
            <div className="step-editor">
                <label htmlFor="action-type">
                    <SelectActionType handleActionTypeChange={this.handleActionTypeChange} />
                </label>
                {(() => {
                    console.log(this.state.step);
                    switch (this.state.step.actionType) {
                        case 'pageLoad':
                            return <PageLoadAction handleUrlFieldChange={this.handleUrlFieldChange} url={this.state.step.url} />;
                    }
                })()}
                <button onClick={this.saveStepEdits}>save</button>
            </div>
        );
    }
}

StepEditor.propTypes = {
    hideStepEditor: React.PropTypes.func.isRequired,
    step: React.PropTypes.object.isRequired,
    stepActions: React.PropTypes.object.isRequired
};

export default StepEditor;
