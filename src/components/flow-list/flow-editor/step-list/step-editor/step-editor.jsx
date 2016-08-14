import React from 'react';
import SelectActionType from './select-action-type';
import PageLoadAction from './actions/page-load';

class StepEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleActionTypeChange = this.handleActionTypeChange.bind(this);
        this.handleUrlFieldChange = this.handleUrlFieldChange.bind(this);

        this.state = {
            step: props.step
        };
    }
    actionSpecificFields () {
        switch (this.state.step.actionType) {
            case 'pageLoad':
                return <PageLoadAction handleUrlFieldChange={this.handleUrlFieldChange} url={this.state.step.url} />;
        }
    }
    handleActionTypeChange (actionType) {
        const updatedStep = Object.assign({}, this.state.step);
        updatedStep.actionType = actionType;

        this.setState({
            step: updatedStep
        });
    }
    handleUrlFieldChange (url) {
        const updatedStep = Object.assign({}, this.state.step);
        updatedStep.url = url;

        this.setState({
            step: updatedStep
        });
    }
    render() {
        return (
            <div className="step-editor">
                <label htmlFor="action-type">
                    <SelectActionType handleActionTypeChange={this.handleActionTypeChange} />
                </label>
                {this.actionSpecificFields()}
                <button onClick={this.props.stepActions.editStep.bind(this, this.props.step.id, this.state.step)}>save</button>
            </div>
        );
    }
}

StepEditor.propTypes = {
    step: React.PropTypes.object.isRequired,
    stepActions: React.PropTypes.object.isRequired
};

export default StepEditor;
